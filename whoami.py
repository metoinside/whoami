from flask import Flask, render_template
import os

STATIC_FOLDER = os.getcwd() + '/assets'
app = Flask(__name__, static_folder=STATIC_FOLDER)


@app.route('/')
def home():
    return render_template('index.html')


if __name__ == '__main__':
    app.run()
