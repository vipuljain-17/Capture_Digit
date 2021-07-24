from flask import Flask, render_template, request
from model import predict_img

app = Flask(__name__)

@app.route('/', methods=['GET'])
def drawing():
    return render_template('index.html')

@app.route('/', methods=['POST'])
def predict_number():

    canvasdata = request.form['canvasimg']
    encoded_data = request.form['canvasimg'].split(',')[1]

    #pred, prob = predict_img(encoded_data)
    pred = 1
    print(encoded_data)

    return render_template('index.html', canvasdata=pred)

if __name__ == '__main__':
	app.run(debug=True)