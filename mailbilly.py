from flask import Flask, render_template
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_pyfile('config.py')
db = SQLAlchemy(app)

@app.route('/')
def index():
    return render_template("index.html")

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='blah')
    parser.add_argument('--furreal', dest='furreal', action='store_true')

    if args.furreal:
      app.config.from_pyfile('config.py')
    else:
      app.config.from_pyfile('test_config.py')

    app.run(host=app.config['HOST'], port=app.config['PORT']