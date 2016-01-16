import os
import argparse

from flask import Flask, render_template, request
from flask.ext.sqlalchemy import SQLAlchemy
import stripe

parser = argparse.ArgumentParser(description='blah')
parser.add_argument('--furreal', help="do it for reals",
                    action="store_true")
print os.environ['SECRET_KEY']

stripe_keys = {
    'secret_key': os.environ['SECRET_KEY'],
    'publishable_key': os.environ['PUBLISHABLE_KEY']
}

stripe.api_key = stripe_keys['secret_key']

app = Flask(__name__)

args = parser.parse_args()
print args.furreal
if args.furreal:
  app.config.from_pyfile('config.py')
else:
  app.config.from_pyfile('test_config.py')

db = SQLAlchemy(app)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host=app.config['HOST'], port=port)