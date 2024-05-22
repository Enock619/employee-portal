from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import OneHotEncoder
from pymongo import MongoClient
import numpy as np

class ModelTrainer:
    def __init__(self):
        # Connect to MongoDB
        self.client = MongoClient('mongodb://localhost:27017/')
        self.db = self.client['employeeportal']
        self.collection = self.db['employees']
        
        # Initialize model
        self.model = LinearRegression()
        self.encoder = OneHotEncoder()

    def train_model(self):
        # Query MongoDB to get the relevant data for training
        X = []
        y = []
        cursor = self.collection.find()
        for doc in cursor:
            X.append([doc['job_role'], doc['work_location']])
            y.append(doc['salary'])

        # Perform one-hot encoding
        X_encoded = self.encoder.fit_transform(X)

        # Train the Linear Regression model
        y = np.array(y)
        self.model.fit(X_encoded, y)

    def predict(self, job_role, location):
        # Perform one-hot encoding for prediction
        X_pred = self.encoder.transform([[job_role, location]])

        # Make prediction using the trained model
        prediction = self.model.predict(X_pred)
        return prediction[0]

# Code to instantiate ModelTrainer and train the model
if __name__ == "__main__":
    trainer = ModelTrainer()
    trainer.train_model()
