import React, { useEffect } from 'react';
import { fetchVideos } from '../api/VideoApi';
import { fetchFavorites, addToFavoritesDb } from '../api/UserAPI';



function HomePage(props) {
  // Currently passing the props: 
  // props.videoInfo == array of objects with video info

  const fetchVideoInfo = async () => {
    try {
      let response = await fetchVideos();
      if (response) {
        let arrayOfIds = []
        //push data for each video to array 
        for (let i = 0; i < response.data.length; i++) {
          arrayOfIds.push(response.data[i])
        }
        //need to remove part of uri string for each uri element in arrayofVids
        for (let j = 0; j < arrayOfIds.length; j++) {
          arrayOfIds[j].uri = arrayOfIds[j].uri.substr(8)
        }
        console.log(arrayOfIds)
        props.setVideoInfo(arrayOfIds)

      } else {
        console.log(response.error.message);
      }
    } catch (err) {
      console.error('error occurred getting videos: ', err);
    }
  }

  useEffect(() => {
    fetchVideoInfo()
  }, [])


  // func that posts to favorites in DB 
  const addToFavorite = async (each) => {
    let vidUri = each.uri;
    let vidName = each.name;
    let vidDescription = each.description;

    let userInfo = await fetchFavorites(localStorage.getItem("auth-user"));
    let userId = userInfo.id


    let videoObject = {
      "user": userId,
      "uri": vidUri,
      "name": vidName,
      "description": vidDescription
    }

    let userToken = localStorage.getItem("auth-user")

    addToFavoritesDb(userToken, videoObject)
  }


  const getFavoriteVideos = async () => {
    let userInfo = await fetchFavorites(localStorage.getItem("auth-user"));
    console.log(userInfo)
  }

  const mapVideos = (array) => {
    return (
      array.map((each, index) => {
        return (
          <div className="card" style={{ border: '4px solid black' }}>

            <img width='370' height='209' sizes='(max-width:370px) 100vw, 370px' className="card-img-top" src={each.pictures.sizes[2].link} alt="Card" />


            <div className="card-body">
              <h5 className="card-title">{each.name}</h5>
              <p className="card-text">{each.description}.</p>
              <a data-fancybox href={`https://player.vimeo.com/video/${each.uri}?autoplay=1&loop=1&byline=0&portrait=0`} className="btn btn-primary">Watch</a>&nbsp;&nbsp;

              <button className='btn btn-danger' onClick={() => addToFavorite(each)} >Add to favs!!</button>&nbsp;&nbsp;

              <button onClick={getFavoriteVideos}>Log favs on account in db</button>

            </div>
          </div>
        )
      })
    )
  }

  return (
    <div style={{
      backgroundImage: `url("https://ik.imagekit.io/0jty0e7po/church_state_inside_g9VA_VbW7L.jpg")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>

      <div className='card-deck card-div'>
        {mapVideos(props.videoInfo)}
      </div>

    </div>
  );
}

export default HomePage;