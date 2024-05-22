import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

const Employee = ({ employees }) => {
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

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_EMPLOYEES_API_URL);
            if (!response.ok) {
                throw new Error('Data could not be fetched!');
            }
            const json_response = await response.json();
            setData(json_response); // assign JSON response to the data variable.
        } catch (error) {
            console.error('Error fetching socks:', error);
        }
    };

    fetchData();
  }, []);

  return (
    <Router>
         <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/search' element={<EmployeeSearch data={data}/>} />
          <Route path='/career' element={<CareerChangePredictor />} />

          </Routes> 
    </Router>
  )
}

export default App
