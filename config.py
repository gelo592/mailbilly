import os

SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']
HOST = '0.0.0.0'


# -*- coding: utf-8 -*-
# ...
# available languages
LANGUAGES = {
    'en': 'English',
    'fr': 'French'
}