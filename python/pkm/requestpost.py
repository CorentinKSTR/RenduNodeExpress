import requests
import json

url = 'http://localhost:3000/pkm'
payload = {'name': "Pikachu", 'type': "Electrik", 'level': 100}
headers = {'content-type': 'application/json'}
r = requests.post(url, data=json.dumps(payload), headers=headers)
print(r.text)