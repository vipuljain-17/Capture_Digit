import numpy as np
from tensorflow import keras
import cv2
import base64

model = keras.models.load_model('mnist.h5')

def predict_img(encoded_data):
    nparr = np.frombuffer(base64.b64decode(encoded_data), np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    gray_image = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    gray_image = cv2.resize(gray_image, (28, 28), interpolation=cv2.INTER_LINEAR)

    img = np.expand_dims(gray_image, axis=0)

    res = model.predict(img)

    prob = max(res)
    pred = np.argmax(res)

    return pred, prob

