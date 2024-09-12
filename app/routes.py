from flask import Blueprint, render_template, request, jsonify

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/submit', methods=['POST'])
def submit():
    data = request.json
    first_name = data.get('firstName')
    last_name = data.get('lastName')
    email = data.get('email')
    postal_code = data.get('postalCode')
    
    # Cek apakah semua field terisi
    if first_name and last_name and email and postal_code:
        return jsonify({'status': 'success', 'message': 'You are successfully connected!'})
    else:
        return jsonify({'status': 'error', 'message': 'Please fill out all fields!'})

