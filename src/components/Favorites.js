import React from 'react';
import { fetchFavorites } from '../api/UserAPI';


function Favorites(props) {


  const getFavoriteVideos = async () => {
    let userInfo = await fetchFavorites(localStorage.getItem("auth-user"));
    console.log(userInfo)
  }




  return (
    <div>
      <h1>favs page!</h1>
      <button onClick={getFavoriteVideos}>Log favs on account in db</button>
    </div>
  );
}

export default Favorites;