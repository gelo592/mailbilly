import os
import argparse

from flask import Flask, render_template
from flask.ext.sqlalchemy import SQLAlchemy

parser = argparse.ArgumentParser(description='blah')
parser.add_argument('--furreal', dest='furreal', action='store_true')

app = Flask(__name__)

args = parser.parse_args()
if args.furreal:
  app.config.from_pyfile('config.py')
else:
  app.config.from_pyfile('test_config.py')

db = SQLAlchemy(app)

@app.route('/')
def index():
    return render_template("index.html")

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host=app.config['HOST'], port=port)