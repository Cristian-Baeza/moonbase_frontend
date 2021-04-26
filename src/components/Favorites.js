import React, { useState, useEffect } from 'react';
import { fetchFavorites } from '../api/UserAPI';


function Favorites(props) {

  const [favorites, setFavorites] = useState([]);


  const getFavoriteVideos = async () => {
    let userInfo = await fetchFavorites(localStorage.getItem("auth-user"));
    console.log(userInfo)
    console.log(userInfo.favorites)
    setFavorites(userInfo.favorites)
  }

  useEffect(() => {
    getFavoriteVideos()
  }, [])

  const mapVideos = (array) => {
    return (
      array.map((each, index) => {
        return (
          <div className="card" style={{ border: '4px solid black' }}>

            {/* <img width='370' height='209' sizes='(max-width:370px) 100vw, 370px' className="card-img-top" src={each.pictures.sizes[2].link} alt="Card" /> */}


            <div className="card-body">
              <h5 className="card-title">{each.name}</h5>
              <p className="card-text">{each.description}.</p>
              <a data-fancybox href={`https://player.vimeo.com/video/${each.uri}?autoplay=1&loop=1&byline=0&portrait=0`} className="btn btn-primary">Watch</a>&nbsp;&nbsp;

              <button className='btn btn-danger'  >Remove from favs</button>&nbsp;&nbsp;

              {/* <button onClick={getFavoriteVideos}>Log favs on account in db</button> */}

            </div>
          </div>
        )
      })
    )
  }



  return (
    <div>
      <h1>favs page!</h1>
      {/* <button onClick={getFavoriteVideos}>Log favs on account in db</button> */}

      <div className='card-deck card-div'>
        {mapVideos(favorites)}
      </div>
    </div>
  );
}

export default Favorites;