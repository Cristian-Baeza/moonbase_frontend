import React, { useState, useEffect } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Components
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import HomePageLogin from './pages/HomePageLogin';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { getLoggedInUser, login } from './api/UserAPI';


function App() {

  ///////////////////////////////////////STATE
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [videoInfo, setVideoInfo] = useState([])

  useEffect(() => {
    const getUser = async () => {
      if (localStorage.getItem("auth-user") !== 'null') {
        let response = await getLoggedInUser(localStorage.getItem("auth-user"));
        let data = await response.json();
        if (data.username) {
          setIsLoggedIn(true);
          setUser(data);
        }
      }
    }
    if (!user) {
      getUser();
    }
  }, [user])

  /////////////////////////////////////////// METHODS
  const handleLogin = async (evt) => {
    evt.preventDefault();
    let userObject = {
      username: evt.target.username.value,
      password: evt.target.password.value,
    }
    let response = await login(userObject);
    let data = await response.json();
    if (data.token) {
      localStorage.setItem("auth-user", `${data.token}`);
      setIsLoggedIn(true);
      setUser(data.user);
    }
  }

  const handleLogout = () => {
    localStorage.setItem("auth-user", null);
    setIsLoggedIn(false);
    setUser(null);
  }

  //////////////////////////////RENDER COMPONENTS
  const renderLoginPage = () => {
    return (
      <LoginPage
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        user={user}
      />
    )
  }

  const renderHomePage = () => {
    return (
      <HomePageLogin
        isLoggedIn={isLoggedIn}
        user={user}
        handleLogout={handleLogout}
      />
    )
  }


  return (
    <div>
      <Router>
        <NavBar />
        <div>
          <Route exact path="/" render={renderHomePage} />
          <Route exact path="/login" render={renderLoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <HomePage
            videoInfo={videoInfo}
            setVideoInfo={setVideoInfo}
          />

        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
