import os

#SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']
#HOST = '0.0.0.0'
basedir = os.path.abspath(os.path.dirname(__file__))

SQLALCHEMY_DATABASE_URI = 'postgresql://localhost/mailbilly'
SQLALCHEMY_MIGRATE_REPO = os.path.join(basedir, 'db_repository')

# -*- coding: utf-8 -*-
# ...
# available languages
LANGUAGES = {
    'en': 'English',
    'fr': 'French'
}

WTF_CSRF_ENABLED = True
SECRET_KEY = 'you-will-never-guess'
