import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

//Components
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';


function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <HomePage />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
