import csv
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("fit4003-interactiveai-firebase-adminsdk-sjgxw-91a089836d.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

users_ref = db.collection(u'Results')
docs = users_ref.stream()

res = []
res.append([f"q{i}" for i in range(1, 14)] + ["total"])
for doc in docs:
    temp = doc.to_dict()["score"]
    temp.append(sum(temp))
    res.append(temp)

with open('result.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(res)