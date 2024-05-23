import React, { useState } from "react";
import Employee from "./Employee";
import Nav from "./Nav";
import "../EmployeeSearch.css"; // Import the CSS file


const EmployeeSearch = (props) => {
    const [searchQuery, setSearchQuery] = useState('');

    // Function to handle search query change
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Function to filter employees based on search query
    const filterEmployees = (employee) => {
        const { name, phone, job_role, work_location } = employee;
        const normalizedQuery = searchQuery.toLowerCase().trim();
        return (
            name.toLowerCase().includes(normalizedQuery) ||
            phone.includes(normalizedQuery) ||
            job_role.toLowerCase().includes(normalizedQuery) ||
            work_location.toLowerCase().includes(normalizedQuery)
        );
    };

    return (
        <>
            <Nav />
            <h1>Employee Search</h1>
            <div className="container">
                <input
                    type="text"
                    placeholder="Search employees..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="form-control"
                />
            </div>
            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {props.data.filter(filterEmployees).map((employee) => (
                    <div key={employee._id} className="employee-card">
                        {/* Removed the img tag from here */}
                        <Employee data={employee} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default EmployeeSearch;
