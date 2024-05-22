import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Employee = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        // Fetch employee data when component mounts
        axios.get('/api/employees')
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.error('Error fetching employee data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Employee Information</h1>
            {employees.map(employee => (
                <div key={employee._id} className="card card-background" style={{ flex: '1', minWidth: '300px', maxWidth: '45%' }}>
                    <div className="card-body">
                        <h5 className="card-title">Employee Details</h5>
                        <div className="card-text">Name: {employee.name}</div>
                        <div className="card-text">Phone: {employee.phone}</div>
                        <div className="card-text">Job Role: {employee.job_role}</div>
                        <div className="card-text">Work Location: {employee.work_location}</div>
                        <div className="card-text">Salary: ${employee.salary}</div>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Employee ID: {employee.employee_id}</small>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Employee;
