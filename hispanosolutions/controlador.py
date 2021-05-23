import sys
from app import app
from flask import Flask,jsonify
from flask_restful import Api
from bin.correos import enviarCorreo

api = Api(app)
#api.add_resource(enviarCorreo,'/enviarcorreo') #Envio de correos

@app.route('/')
def index():
    return jsonify({'status':200,'data':'Bienvenido al sistema de envios de correo'})

@app.route('/enviar')
def enviar():
    enviarCorreo.envia("Prueba de envio de correos","Prueba","luz.mendozag@alercasystems.com,")
    return jsonify({'status':200,'data':'Enviado'})

@app.errorhandler(404)
def not_found(e):
    return jsonify({'message' : 'Error, Pagina no encontrada, verifica tus rutas.'})