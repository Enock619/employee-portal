import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

// import components 
import Employee from './components/Employee'
import Home from './components/Home';
import Login from './components/Login';
import EmployeeSearch from './components/EmployeeSearch';
import CareerChangePredictor from './components/CareerChangePredictor';

function App() {
  
  return (
    <Router>
         <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/search' element={<EmployeeSearch />} />
          <Route path='/career' element={<CareerChangePredictor />} />

          </Routes> 
    </Router>
  )
}

export default App
