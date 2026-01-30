from flask import Flask, jsonify
import time

app = Flask(__name__)

@app.route("/protocolo", methods=["POST"])
def gerar_protocolo():
    protocolo = f"DF-{int(time.time())}"
    return jsonify({
        "protocolo": protocolo,
        "status": "registrado"
    })

if __name__ == "__main__":
    app.run(port=5000, debug=True)
