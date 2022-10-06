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
construct = ["Accountability", "Accountability", "Fairness", "Fairness", "Privacy", "Fairness", "Accountability", "Privacy", "Fairness", "Fairness", "Human, societal & environmental well-being", "Human, societal & environmental well-being", "Accountability"]
res.append(construct)
type = ["Perception", "Approach", "Approach", "Perception", "Perception", "Approach", "Perception", "Perception", "Perception", "Approach", "Approach", "Perception", "Approach"]
res.append(type)

for doc in docs:
    temp = doc.to_dict()["score"]
    temp.append(sum(temp))
    res.append(temp)

sum_per_question = [sum(i) for i in zip(*res[3:])]
res.append(sum_per_question)

avg_per_question = [i/(len(res) - 4) for i in sum_per_question]
res.append(avg_per_question)

with open('result.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(res)

