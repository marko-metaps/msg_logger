# -*- coding: utf-8 -*-
from flask import Flask, jsonify, abort, make_response, request
from flask_cors import CORS
import json
import sys

api = Flask(__name__)
CORS(api) # Cors is needed to make cross requests

@api.route('/', methods=['POST'])
def sample():
	result = request.json
	print(result, file=sys.stdout) # Just print out what was received
	return make_response(jsonify(result))

@api.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

if __name__ == '__main__':
    api.run(host = "localhost", port=80)