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
    let vidImage = each.pictures.sizes[2].link

    let userInfo = await fetchFavorites(localStorage.getItem("auth-user"));
    let userId = userInfo.id

    let videoObject = {
      "user": userId,
      "uri": vidUri,
      "name": vidName,
      "description": vidDescription,
      "image": vidImage
    }

    let userToken = localStorage.getItem("auth-user")

    addToFavoritesDb(userToken, videoObject)
  }


  const mapVideos = (array) => {
    return (
      array.map((each, index) => {
        return (
          <div className="col-sm-2">
            <div className="card" style={{ border: '4px solid black' }}>

              <img className="card-img-top" src={each.pictures.sizes[2].link} alt="Card" />
              {/* <img width='370' height='209' sizes='(max-width:370px) 100vw, 370px' className="card-img-top" src={each.pictures.sizes[2].link} alt="Card" /> */}


              <div className="card-body">
                <h5 className="card-title">{each.name}</h5>
                <p className="card-text">{each.description}.</p>
                <a data-fancybox href={`https://player.vimeo.com/video/${each.uri}?autoplay=1&loop=1&byline=0&portrait=0`} className="btn btn-primary">Watch</a>&nbsp;&nbsp;

              <button className='btn btn-danger' onClick={() => addToFavorite(each)} >Add to favs!!</button>

              </div>
            </div>
          </div>
        )
      })
    )
  }

  return (
    <>
      {/* <SideNav /> */}
      <div class="sidenav">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <div className='card-deck'>
        {mapVideos(props.videoInfo)}
      </div>


    </>
  );
}

export default HomePage;