import requests
import json

url = 'http://localhost:3000/pkm/652e38f0ae65ec3a37242f61'
payload = {'name': " ", 'type': " ", 'level': 50}
headers = {'content-type': 'application/json'}
r = requests.put(url, data=json.dumps(payload), headers=headers)
print(r.text)