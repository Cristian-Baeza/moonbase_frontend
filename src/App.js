import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom';
//Components
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';



function App() {

  const [videoInfo, setVideoInfo] = useState([])

  return (
    <Router>
      <div>
        <NavBar />
        <HomePage
          videoInfo={videoInfo}
          setVideoInfo={setVideoInfo}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
