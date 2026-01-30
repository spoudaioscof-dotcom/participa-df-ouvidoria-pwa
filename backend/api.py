from flask import Flask, request, jsonify
import time

app = Flask(__name__)

@app.route("/manifestation", methods=["POST"])
def register():
    protocol = f"DF-{int(time.time())}"
    return jsonify({
        "protocol": protocol,
        "status": "registrado"
    })

if __name__ == "__main__":
    app.run(debug=True)
