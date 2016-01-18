import os
import argparse

from flask import Flask, render_template, request, redirect
from flask.ext.sqlalchemy import SQLAlchemy

parser = argparse.ArgumentParser(description='blah')
parser.add_argument('--furreal', help="do it for reals",
                    action="store_true")

app = Flask(__name__)

args = parser.parse_args()
print args.furreal
if args.furreal:
  app.config.from_pyfile('config.py')
else:
  app.config.from_pyfile('test_config.py')

db = SQLAlchemy(app)

@app.route('/')
def index_fr():
  return render_template("index.html")
  """if request.is_secure:
    return render_template("index.html")
  else:
    return redirect(request.url.replace("http://", "https://"))"""

@app.route('/en/')
def index_en():
  print request.url, request.url.find("https") >= 0
  if request.url.find("https") >= 0:
    print 'boo'
    return render_template("index_en.html")
  else:
    print 'ahh'
    httpUrl = request.url.replace("http://", "https://")
    print httpUrl
    return redirect(httpUrl)

@app.route('/supersecretlongurlwhywouldyougohere')
def staging():
  return render_template("staging.html")

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host=app.config['HOST'], port=port, debug=True)