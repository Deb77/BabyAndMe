import os
from pymongo import MongoClient

mongouri = os.getenv("MONGODB_URI")
mongodb_database = os.getenv("MONGODB_DATABASE")

client = MongoClient(f"{mongouri}")  
db = client[mongodb_database]

