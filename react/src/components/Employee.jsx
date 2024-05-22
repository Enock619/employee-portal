import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Employee = (props) => {

    return (
        <div>
            <h1>Employee Information</h1>
                <div key={props.data._id} className="card card-background" style={{ flex: '1', minWidth: '300px', maxWidth: '45%' }}>
                    <div className="card-body">
                        <h5 className="card-title">Employee Details</h5>
                        <div className="card-text">Name: {props.data.name}</div>
                        <div className="card-text">Phone: {props.data.phone}</div>
                        <div className="card-text">Job Role: {props.data.job_role}</div>
                        <div className="card-text">Work Location: {props.data.work_location}</div>
                        <div className="card-text">Salary: ${props.data.salary}</div>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Employee ID: {props.data.employee_id}</small>
                    </div>
                </div>
        </div>
    );
};

export default Employee;
