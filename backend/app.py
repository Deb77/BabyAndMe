import os
from flask import Flask, request, jsonify, render_template
from bson import ObjectId
from dotenv import load_dotenv
load_dotenv()
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from helpers.database import db

app = Flask(__name__)

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
            "center_id": ObjectId(center_id),
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
    db.feeding_center_reviews.update_one({"center_id": ObjectId(center_id)}, {
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
            "center_id": ObjectId(center_id)
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

if __name__ == "__main__":
    app.run(debug=True)


