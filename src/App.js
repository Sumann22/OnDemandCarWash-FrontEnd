import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './components/Home';
import Login from './components/Form';
import WashPackages from './components/WashPackages';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AdminDashboard from './components/AdminDashboard';
import { useEffect } from 'react';
import RegisterForm from './components/RegisterForm';


function App() {
  useEffect(function () {
    const adminCreds = window.localStorage.getItem('carWash_admin');
    if (adminCreds) {
      const parsedAdminCreds = JSON.parse(adminCreds);
    } else {
      window.localStorage.setItem('carWash_admin', JSON.stringify({ userId: 'admin', password: 'admin' }));
    }
  }, [])
  return (

    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' element={<Login />} exact />
          <Route path='/logout' element={<Home />} exact />
          <Route path='/register' element={<RegisterForm />} exact />
          <Route path='/home' element={<Home />} exact />
          <Route path='/WashPackages' element={<WashPackages />} exact />
          <Route path='/dashboard' exact element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </Router>
    </>

  );
}

export default App;

