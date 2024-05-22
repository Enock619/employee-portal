import React, { useState } from "react";

const CareerChangePredictor = () => {
    const [jobRole, setJobRole] = useState('');
    const [location, setLocation] = useState('');
    const [predictedSalary, setPredictedSalary] = useState(null);
    const [error, setError] = useState('');

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
            const formattedSalary = Number(data.predicted_salary).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            setPredictedSalary(formattedSalary);
            setError('');
        } catch (error) {
            console.error('Error predicting salary:', error);
            setError('Error predicting salary. Please try again later.');
            setPredictedSalary(null);
        }
    }

    return (
        <>
            <h1>Career Change</h1>
            <div>
                <input type="text" placeholder="Job Role" value={jobRole} onChange={(e) => setJobRole(e.target.value)} />
                <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
                <button onClick={predictSalary}>Predict Salary</button>
            </div>
            {error && <p>{error}</p>}
            {predictedSalary && <p>Predicted Salary: ${predictedSalary}</p>}
        </>
    )
}

export default CareerChangePredictor;
