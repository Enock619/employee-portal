#pip install flask-cors before running this script

from flask import Flask, request, jsonify
from flask_cors import CORS
from model_trainer import ModelTrainer

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Instantiate ModelTrainer
trainer = ModelTrainer()

# Train the model
trainer.train_model()

@app.route('/predict_salary', methods=['POST'])
def predict_salary():
    try:
        data = request.get_json()
        job_role = data['job_role']
        location = data['location']

        # Make prediction using the trained model
        prediction = trainer.predict(job_role, location)

        return jsonify({'predicted_salary': prediction})

    except Exception as e:
        return jsonify({'error': 'An error occurred'}), 500

if __name__ == '__main__':
    app.run(debug=True)
