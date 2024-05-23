import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { AuthProvider } from "./hooks/AuthContext";
import RequireAuth from "./components/RequireAuth";
import 'bootstrap/dist/css/bootstrap.min.css';


// import components 
import Employee from './components/Employee'
import Home from './components/Home';
import Login from './components/Login';
import EmployeeSearch from './components/EmployeeSearch';
import CareerChangePredictor from './components/CareerChangePredictor';

// fetch data
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
            console.error('Error fetching employees:', error);
        }
    };

    fetchData();
  }, []);

  return (
      <section className='container-fluid'>
    <Router>
      <AuthProvider>
         <Routes>
          <Route path='/' element={<Home data={data} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/search' element={<RequireAuth><EmployeeSearch data={data}/> </RequireAuth>} />
          <Route path='/career' element={<CareerChangePredictor />} />

          </Routes>
      </AuthProvider>
    </Router>
    </section>
  )
}

export default App