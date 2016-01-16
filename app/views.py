from flask import render_template, flash, redirect
from app import app
from .forms import LoginForm

@app.route('/')
def index_fr():
    return render_template("index.html")

@app.route('/en/')
def index_en():
  return render_template("index_en.html")

@app.route('/supersecretlongurlwhywouldyougohere')
def staging():
  return render_template("staging.html")

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        flash('Login requested for OpenID="%s", remember_me=%s' %
              (form.openid.data, str(form.remember_me.data)))
        return redirect('/customer')
    return render_template('login.html',
                           title='Sign In',
                           form=form)

@app.route('/customer')
def customer():
    user = {'name': "something", 'credits': 40.5, 'all_mail': 4, 'week_mail': 1}
    print user
    return render_template("customer.html", user=user)

@app.route('/admin')
def admin():
    users = [{'name': "namie namerson", 'id': 1}, {'name':"namerson namely", 'id': 2}, {'name':"namely namington", 'id': 3}]
    return render_template("admin.html", users=users)

@app.route('/checkout')
def checkout():
    return render_template('checkout.html', key=stripe_keys['publishable_key'])

@app.route('/charge', methods=['POST'])
def charge():
    # Amount in cents
    amount = 500

    customer = stripe.Customer.create(
        email='customer@example.com',
        card=request.form['stripeToken']
    )

    charge = stripe.Charge.create(
        customer=customer.id,
        amount=amount,
        currency='usd',
        description='Flask Charge'
    )

    return render_template('charge.html', amount=amount)