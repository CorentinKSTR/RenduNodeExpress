import requests

url = 'http://localhost:3000/pkm/652fac4de8b4d10f6bad1b17'
headers= {'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzU2NDA0YjY0ZWJmYjhiYjdjZjgyOCIsIm1haWwiOiJjb3JlbnRpbkBnbWFpbC5jb20iLCJpYXQiOjE2OTc5OTc4NDYsImV4cCI6MTY5ODAxOTQ0Nn0.ZGCu5Hp-qqvG76MRlqhGtqgsfMQ-LimiCrVl3dGzwjw'}
r = requests.delete(url, headers=headers)
print(r.text)