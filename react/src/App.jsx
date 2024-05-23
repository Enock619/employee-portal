// App.jsx

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './hooks/AuthContext';
import RequireAuth from './components/RequireAuth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import your custom CSS file

// Import components
import Employee from './components/Employee';
import Home from './components/Home';
import Login from './components/Login';
import EmployeeSearch from './components/EmployeeSearch';
import CareerChangePredictor from './components/CareerChangePredictor';

function App() {
  const [employees, setEmployees] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_EMPLOYEES_API_URL);
      if (!response.ok) {
        throw new Error('Data could not be fetched!');
      }
      const json_response = await response.json();
      setEmployees(json_response); // assign JSON response to the data variable.
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login employees={employees} fetchData={fetchData} />} />
          <Route path="/search" element={<RequireAuth><EmployeeSearch employees={employees} /></RequireAuth>} />
          <Route path="/career" element={<CareerChangePredictor />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
