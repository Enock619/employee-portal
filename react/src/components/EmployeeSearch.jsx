import React from "react";
import Employee from "./Employee";
import Nav from "./Nav";
const EmployeeSearch = (props) => {

    return (
        <>
        <Nav/>
        <h1>Search</h1>
        <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {
                props.data.map((employee) => (
                    <Employee key={employee._id} data={employee} />
                ))
            }
        </div>
        </>
    )
}

export default EmployeeSearch;