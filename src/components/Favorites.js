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


  // EDIT MAPPING ON HOMEPAGE THEN COPY OVER HERE
  const mapVideos = (array) => {
    return (
      array.map((each, index) => {
        return (
          <Card className='card' style={{ border: '4px solid black' }}>
            <Card.Img src={each.image} alt="Card" />
            <Card.Body>
              {/* <img width='370' height='209' sizes='(max-width:370px) 100vw, 370px' className="card-img-top" src={each.pictures.sizes[2].link} alt="Card" /> */}

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
      <h1>FAVORITES</h1>
      <CardGroup className='homepage'>
        {mapVideos(favorites)}
      </CardGroup>
    </>
  );
}

export default Favorites;