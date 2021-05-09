import React, { useState, useEffect } from 'react';
import { fetchFavorites, deleteFavorite } from '../api/UserAPI';
import { CardGroup, Card } from 'react-bootstrap';



function Favorites(props) {

  const [favorites, setFavorites] = useState([]);


  const getFavoriteVideos = async () => {
    let userInfo = await fetchFavorites(localStorage.getItem("auth-user"));
    // console.log(userInfo)
    console.log(userInfo.favorites)
    setFavorites(userInfo.favorites)
  }

  useEffect(() => {
    getFavoriteVideos()
  }, [])


  const removeFavorite = (each) => {
    console.log(each.id)
    let userToken = localStorage.getItem("auth-user")
    // console.log(userToken)
    deleteFavorite(userToken, each.id);
    window.location.reload();
  }


  const mapVideos = (array) => {
    return (
      array.map((each, index) => {
        return (
          <Card className='card' style={{ border: '4px solid black' }}>
            <Card.Img src={each.image} alt="Card" />
            <Card.Body>
              <Card.Title>{each.name}</Card.Title>
              <Card.Text>{each.description}.</Card.Text>
              <a data-fancybox href={`https://player.vimeo.com/video/${each.uri}?autoplay=1&loop=1&byline=0&portrait=0`} className="btn btn-primary">Watch</a>&nbsp;&nbsp;

              <button className='btn btn-danger' onClick={() => removeFavorite(each)}>Remove from favs</button>&nbsp;&nbsp;

            </Card.Body>
          </Card>
        )
      })
    )
  }



  return (
    <>
      <h1 className='favorites-title'>FAVORITES</h1>
      <div className='homepage favoritepage'>
        <CardGroup >
          {mapVideos(favorites)}
        </CardGroup>
      </div>
    </>
  );
}

export default Favorites;