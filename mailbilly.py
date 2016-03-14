#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import argparse

from flask import Flask, render_template, request, redirect, flash, Markup
from flask.ext.sqlalchemy import SQLAlchemy
from flask_sslify import SSLify
import stripe

stripe_keys = {
    'secret_key': os.environ['SECRET_KEY'],
    'publishable_key': os.environ['PUBLISHABLE_KEY']
}
stripe.api_key = stripe_keys['secret_key']

parser = argparse.ArgumentParser(description='blah')
parser.add_argument('--furreal', help="do it for reals",
                    action="store_true")

app = Flask(__name__)
app.secret_key = 'some_secret'

args = parser.parse_args()

if args.furreal:
  app.config.from_pyfile('config.py')
  sslify = SSLify(app)
else:
  app.config.from_pyfile('test_config.py')

db = SQLAlchemy(app)

@app.route('/')
def index_fr():
  return render_template("index.html", key=stripe_keys['publishable_key'])

@app.route('/en/')
def index_en():
  return render_template("index_en.html", key=stripe_keys['publishable_key'])

#@app.route('/supersecretlongurlwhywouldyougohere')
#def staging():
#  return render_template("index-staging.html", key=stripe_keys['publishable_key'])

@app.route('/charge', methods=['POST'])
def charge():
  charge = stripe.Charge.create(
    source=request.form['stripeToken'],
    amount=request.form['amount'],
    currency='eur',
    description='Mail Billy Credits'
  )
  #flash(Markup('Votre commande a été validée !'))
  return redirect('/')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host=app.config['HOST'], port=port)