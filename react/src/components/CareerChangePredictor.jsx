import React, { useState } from "react";
import Nav from "./Nav";

const CareerChangePredictor = () => {
    const [jobRole, setJobRole] = useState('');
    const [location, setLocation] = useState('');
    const [predictedSalary, setPredictedSalary] = useState(null);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);

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
            setShowModal(true); // Show modal after successful prediction
        } catch (error) {
            console.error('Error predicting salary:', error);
            setError('Error predicting salary. Please try again later.');
            setPredictedSalary(null);
        }
    }

    return (
        <div className="container">
            <Nav/>
            <h1 className="text-center">Cat Career Predictor</h1>
            {/* Funny intro card */}
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">Welcome to the Cat Career Predictor!</h5>
                    <p className="card-text">Are you a proud cat owner looking to explore career 
                    opportunities for your feline friend? Or maybe you're a feline employee looking for 
                    your next big break in the job market? Look no further! Our cat temp agency is here to 
                    help you find the purrfect career path. Explore the possibilities below!</p>
                </div>
            </div>
            {/* Career prediction form */}
            <div className="row">
                <div className="col-md-6 d-flex">
                    <div className="card flex-grow-1">
                        <div className="card-body">
                            <div className="form-group mb-3">
                                <label htmlFor="jobRole">Job Role</label>
                                <select id="jobRole" className="form-control" value={jobRole} onChange={(e) => setJobRole(e.target.value)}>
                                    <option value="">Select Job Role</option>
                                    <option value="Software Engineer">Software Engineer</option>
                                    <option value="Data Scientist">Data Scientist</option>
                                    <option value="Sales">Sales</option>
                                    <option value="HR">HR</option>
                                    <option value="Marketing Specialist">Marketing Specialist</option>
                                </select>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="location">Location</label>
                                <select id="location" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)}>
                                    <option value="">Select Location</option>
                                    <option value="Hartford">Hartford</option>
                                    <option value="St. Paul">St. Paul</option>
                                    <option value="New York">New York</option>
                                    <option value="San Francisco">San Francisco</option>
                                    <option value="Tokyo">Tokyo</option>
                                    <option value="London">London</option>
                                </select>
                            </div>
                            <div className="form-group mb-3 d-flex justify-content-center">
                                <button className="btn btn-primary mt-3" onClick={predictSalary}>Predict Salary</button>
                            </div>
                        </div>
                    </div>
                    {error && <p>{error}</p>}
                </div>
                {/* Image */}
                <div className="col-md-6 d-flex">
                    <div className="card flex-grow-1">
                        <img src="https://media.istockphoto.com/id/1397756029/photo/bengal-cat-in-glasses-works-at-the-table-on-the-computer.jpg?s=612x612&w=0&k=20&c=xbB5PSNre-zTMV6IA1dJCXcOrMVBOXs1p7mnmjgwBZo=" alt="Career Image" className="img-fluid" />
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Predicted Salary</h5>
                        </div>
                        <div className="modal-body">
                            {predictedSalary && <p>Predicted Salary: ${predictedSalary}</p>}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`modal-backdrop fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}></div>
        </div>
    )
}

export default CareerChangePredictor;
