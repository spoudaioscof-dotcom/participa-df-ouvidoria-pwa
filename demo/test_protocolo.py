import requests

response = requests.post("http://localhost:5000/protocolo")

print("Resposta da API:")
print(response.json())
