import os
import hashlib
import json 
from flask_cors import CORS
from flask import Flask, request, jsonify, render_template
from bson.objectid import ObjectId
from dotenv import load_dotenv
load_dotenv()
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from helpers.database import db

app = Flask(__name__)
CORS(app)

# Mail settings
app.config['SECRET_KEY'] = os.getenv("MAIL_SECRET_KEY")
app.config['MAIL_SERVER'] = os.getenv("MAIL_SERVER")
app.config['MAIL_PORT'] = int(os.getenv("MAIL_PORT"))
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv("MAIL_USERNAME")
app.config['MAIL_PASSWORD'] = os.getenv("MAIL_PASSWORD")
app.config['MAIL_DEFAULT_SENDER'] = os.getenv("MAIL_DEFAULT_SENDER")
mail = Mail(app)

def sendmail(email,html):
    message = Mail(
        from_email='deb.mendes.9@gmail.com',
        to_emails=email,
        subject="Resource verification",
        html_content=html)
    try:
        sg = SendGridAPIClient("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")
        response = sg.send(message)
        print(response.status_code)
    except Exception as e:
        print(e)

def hash_password(text):
    salt = os.getenv("PASSWORD_SECRET_KEY")
    hashed = str(text) + salt
    hashed = hashlib.md5(hashed.encode())
    hashed = hashed.hexdigest()
    return hashed

# Breast feeding center routes

## Creating breast feeding center
@app.route('/feeding-center-create', methods=["POST"])
def create_feeding_center():
    try:
        name = request.json["name"]
        email = request.json["email"]
        lat = request.json["lat"]
        long = request.json["long"]
        description = request.json["description"]
        center = db.feeding_centers.insert({
            "name": name,
            "lat": lat,
            "long": long,
            "description": description,
            "avg_rating": 0,
            "verified": False
            })
        status = 201
        message = "Please check your email to complete this step"
        html = f"<a href='http://localhost:5000/verify?center_id={center}'>Click to complete the process.<a/>"
        sendmail(email, html)
        return jsonify({"status":status,"message":message})
    except:
        status = 400
        message = "Please enter in all fields"
        return jsonify({"status": status, "message": message})

## Verifying breastfeeding center
@app.route("/verify", methods=["GET"])
def verify():
    center_id = request.args.get("center_id")
    db.feeding_centers.update_one({"_id": ObjectId(center_id)}, {
        "$set": {"verified": True}
    })
    return render_template("verify.html")

## Getting all breast feeding centers
@app.route("/get-all-centers", methods=["GET"])
def get_all_centers():
    try:
        centers = list(db.feeding_centers.find({"verified": True}))
        centers = [{
            "_id": str(center["_id"]),
            "name": center["name"],
            "lat": center["lat"],
            "long": center["long"],
            "description": center["description"]
            } for center in centers]
        status = 201
        return jsonify({"status": status, "data": centers})
    except:
        status = 400
        return jsonify({"status": status, "message": "No centers found"})
        
## Adding reviews to a breast feeding center
@app.route("/add-review/<center_id>", methods=["POST"])
def add_review(center_id):
    try:
        name = request.json["name"]
        email = request.json["email"]
        rating = request.json["rating"]
        comment = request.json["comment"]
        db.feeding_center_reviews.insert_one({
            "center_id": center_id,
            "name": name,
            "rating": rating,
            "comment": comment,
            "verified": False
        })
        html = f"<a href='http://localhost:5000/verify-review?center_id={center_id}'>Click to complete the process.<a/>"
        sendmail(email, html)
        return jsonify({"status": 201, "message": "Please check your email to complete this step"})    
    except:
        status = 400
        message = "Please enter in all fields"
        return jsonify({"status": status, "message": message})

## Verify reviews for the breast feeding center
@app.route("/verify-review", methods=["GET"])
def verify_review():
    center_id = request.args.get("center_id")
    print(center_id)

    db.feeding_center_reviews.update_one({"center_id": center_id}, {
        "$set": {"verified": True}
    })
    return render_template("verify.html")

## Getting all reviews
@app.route("/get-all-reviews", methods=["GET"])
def get_all_reviews():
    try: 
        reviews = list(db.feeding_center_reviews.find({"verified": True}))
        reviews = [{
            "_id": str(review["_id"]),
            "name": review["name"],
            "rating": review["rating"],
            "comment": review["comment"]
            } for review in reviews]
        status = 201
        return jsonify({"status": status, "data": reviews})
    except:
        status = 400
        message = "No reviews found"
        return jsonify({"status": status, "message": message})

        
## Getting reviews for a paritcular breast feeding center
@app.route("/get-center-reviews/<center_id>", methods=["GET"])
def get_center_reviews(center_id):
    try:
        reviews = list(db.feeding_center_reviews.find({
            "verified": True,
            "center_id": center_id
            }))
        reviews = [{
            "_id": str(review["_id"]),
            "name": review["name"],
            "rating": review["rating"],
            "comment": review["comment"]
            } for review in reviews]
        status = 201
        return jsonify({"status": status, "data": reviews})
    except:
        status = 400
        message = "No reviews found"
        return jsonify({"status": status, "message": message})

# Admin side routes

## Admin signup
@app.route("/donation-center/signup", methods=["POST"])
def signup():
    try:
        place = request.json["place"]
        number = request.json["number"]
        location = request.json["location"]
        email = request.json["email"]
        bottle_count = request.json["bottle_count"]
        password = request.json['password']
            
        db.donation_center.insert_one({
            "place": place,
            "number": number,
            "location": location,
            "email": email,
            "bottle_count": bottle_count,
            "password": hash_password(password)
        })
        status = 201
        message = "Admin user created successfully"
        return jsonify({"status": status, "message": message})      
    except:
        status = 400
        message = "Admin user could not be created"
        return jsonify({"status": status, "message": message})

@app.route("/donation-center/login", methods=["POST"])
def login():
    try:
        email = request.json["email"]
        password = request.json["password"]
        admin = db.donation_center.find_one({
            "email": email
        })
        if admin["password"] == hash_password(password):
            status = 201
            message = "Logged in successfully"
            data = {"_id": str(admin["_id"])}
            return jsonify({"status": status, "message": message, "data": data})
        else:
            status = 400
            message = "Incorrect password",
            return jsonify({"status": status, "message": message })
    except:
        status = 400
        message = "Something went wrong",
        return jsonify({"status": status, "message": message})
        
@app.route("/donation-center/getall", methods=["GET"])
def getall():
    try:
        centers = list(db.donation_center.find({}))
        centers = [{
            "_id": str(center["_id"]),
            "place": center["place"],
            "number": center["number"],
            "location": center["location"],
            "bottle_count": center["bottle_count"]
            } for center in centers]
        status = 201
        data = centers
        return jsonify({"status": status, "data": data})    
    except:
        status = 400
        message = "Could not find any lactation centers"
        return jsonify({"status": status, "message": message})

@app.route("/donation-center/<center_id>", methods=["PUT"])
def getcenter(center_id):
    if request.method == "GET":
        try:
            center = db.donation_center.find_one({"_id": ObjectId(center_id)})
            center_formated = {
                "_id": str(center["_id"]),
                "place": center["place"],
                "number": center["number"],
                "location": center["location"],
                "bottle_count": center["bottle_count"]
                } 
            status = 201
            return jsonify({"status": status, "data": center_formated})  
        except:
            status = 400
            message = "Could not find any lactation center"
            return jsonify({"status": status, "message": message})
    elif request.method == "PUT":
        try: 
            bottle_count = request.json["bottle_count"]
            db.donation_center.update_one({"_id": ObjectId(center_id)}, {
                "$set": {"bottle_count": bottle_count}
            })
            status = 201
            message = "Bottle count updated"
            return jsonify({"status": status, "message": message})
        except:
            status = 400
            message = "Failed to update bottle count"
            return jsonify({"status": status, "message": message})
        


if __name__ == "__main__":
    app.run(debug=True)


