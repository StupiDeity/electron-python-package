from flask import Flask, request, jsonify
import numpy as np
app = Flask(__name__)


#request JSON is of following type
#{"arr1":[[1,2],[3,4]],"arr2":[[5,6],[7,8]]}
#curl --request POST --url http://127.0.0.1:5000/matrix/multiply --header 'content-type: application/json' --data '{"arr1":[[1,2],[3,4]],"arr2":[[5,6],[7,8]]}'
@app.route("/matrix/multiply", methods=['POST'])
def multiply():
    a = request.json['arr1']
    b = request.json['arr2']
    c = np.dot(a, b)
    return jsonify(c.tolist())

if __name__ == '__main__':
    app.run(debug=True)
