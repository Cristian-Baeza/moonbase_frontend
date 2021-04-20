import React, { useEffect } from 'react';
import { fetchVideos } from '../api/VideoApi';



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



  // const mapVideos = (array) => {
  //   return (
  //     array.map((each, index) => {
  //       return (
  //         <div style={{ border: '4px solid black' }}>
  //           <h1>{each.name}</h1>

  //           <iframe key={index} title='yes' src={`https://player.vimeo.com/video/${each.uri}?loop=1&byline=0&portrait=0`} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen>
  //           </iframe>
  //           <p>{each.description}</p>

  //           <script src="https://player.vimeo.com/api/player.js"></script>
  //         </div>
  //       )
  //     })
  //   )
  // }
  // <div style="padding:56.25% 0 0 0;position:relative;">
  // style="position:absolute;top:0;left:0;width:100%;height:100%;"

  // console.log(props.videoInfo[0].pictures.sizes)

  const mapVideos2 = (array) => {
    return (
      array.map((each, index) => {
        return (
          <div className="card" style={{ border: '4px solid black' }}>

            <img width='370' height='209' sizes='(max-width:370px) 100vw, 370px' className="card-img-top" src={each.pictures.sizes[2].link} alt="Card" />


            <div className="card-body">
              <h5 className="card-title">{each.name}</h5>
              <p className="card-text">{each.description}.</p>
              <a data-fancybox href={`https://player.vimeo.com/video/${each.uri}?loop=1&byline=0&portrait=0`} className="btn btn-primary">Watch</a>
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
        {mapVideos2(props.videoInfo)}
      </div>

    </div>
  );
}

export default HomePage;