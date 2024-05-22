import React, { useState, useEffect } from "react";
import Nav from "./Nav";

const CareerChangePredictor = () => {
    const [jobRole, setJobRole] = useState('');
    const [location, setLocation] = useState('');
    const [predictedSalary, setPredictedSalary] = useState(null);

    const predictSalary = async () => {
        try {
            const response = await fetch('http://localhost:5000/predict_salary', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ job_role: jobRole, location: location })
            });
            if (!response.ok) {
                throw new Error('Error predicting salary');
            }
            const data = await response.json();
            setPredictedSalary(data.predicted_salary);
        } catch (error) {
            console.error('Error predicting salary:', error);
        }
    }

    return (
        <>   
            <Nav/>
            <h1>Career Change</h1>
            <div>
                <input type="text" placeholder="Job Role" value={jobRole} onChange={(e) => setJobRole(e.target.value)} />
                <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
                <button onClick={predictSalary}>Predict Salary</button>
            </div>
            {predictedSalary && <p>Predicted Salary: ${predictedSalary}</p>}
        </>
    )
}

export default CareerChangePredictor;
