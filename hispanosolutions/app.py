from flask import Flask

app=Flask(__name__)
app.config['SECRET_KEY']='MiLlave'

from controlador import *

if __name__=='__main__':
    app.run(debug=True,host='0.0.0.0',port=5000)