import React, { useState, useEffect } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Components
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import HomePageLogin from './pages/HomePageLogin';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Favorites from './components/Favorites';
import Feed from './components/Feed';
import News from './components/News';
import Footer from './components/Footer';
//API
import { getLoggedInUser, login } from './api/UserAPI';


function App() {

  ///////////////////////////////////////STATE
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [videoInfo, setVideoInfo] = useState([])
  const [favorites, setFavorites] = useState([])

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

  const renderHomePageLogin = () => {
    return (
      <HomePageLogin
        isLoggedIn={isLoggedIn}
        user={user}
        handleLogout={handleLogout}
      />
    )
  }

  const renderHomePage = () => {
    return (
      <HomePage
        videoInfo={videoInfo}
        setVideoInfo={setVideoInfo}
        setFavorites={setFavorites}
        favorites={favorites}
      />
    )
  }



  return (
    <div>
      <Router>
        <NavBar />
        <Route exact path="/" render={renderHomePageLogin} />
        <Route exact path="/" render={renderHomePage} />
        <Route exact path="/login" render={renderLoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path='/favorites' component={Favorites} />
        <Route exact path='/feed' component={Feed} />
        <Route exact path='/news' component={News} />
      </Router>
    </div>
  );
}

export default App;
