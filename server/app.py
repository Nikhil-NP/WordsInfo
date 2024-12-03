from flask import Flask,request,jsonify

from flask_cors import CORS #for cross origin requests

from api.gemini import fetch_gemini_api


app = Flask(__name__)
CORS(app)

@app.route('/api/search',methods=['POST'])
def search():
    data = request.json
    query = data.get('query')#getting query from frontend
    if not query:
        return jsonify({'error' : 'query is mandatory'})
    responce = fetch_gemini_api(query)
    return jsonify(responce)

if __name__ == "__main__":
    app.run(debug=True)
