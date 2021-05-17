from flask_login.utils import login_required
from . import bp as main
from flask import render_template, request, redirect, url_for, flash
from app.blueprints.blog.models import Post
from flask.templating import render_template

@main.route('/')
def index():
    context = {
       'title': 'HOME',
       'posts': Post.query.all()
    }
    return render_template('index.html', **context)

@main.route("/cart")
@login_required
def cart():
    title = "Cart"
    return render_template("cart.html", title=title)

# @main.route("/checkout")
# def cart():
#     title = "Checkout"
#     return render_template("checkout.html", title=title)
