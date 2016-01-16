from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.login import LoginManager

login_manager = LoginManager()
login_manager.session_protection = 'strong'
login_manager.login_view = 'auth.login'

app = Flask(__name__)
app.config.from_object('config')
db = SQLAlchemy(app)

from app import views, models

from .auth import auth as auth_blueprint
app.register_blueprint(auth_blueprint, url_prefix='/auth')