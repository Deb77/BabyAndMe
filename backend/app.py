from flask import Flask
from dotenv import load_dotenv
load_dotenv()
from helpers.database import db

app = Flask(__name__)

if __name__ == "__main__":
    app.run(debug=True)

@app.route('/')
def hello_world():
    db.users.insert_one({"name":"het"})
    return "Test"


