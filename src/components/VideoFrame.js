import React, { useState } from 'react';

import { fetchVideos } from '../api/VideoApi';



function VideoFrame() {

  const [videoIds, setVideoIds] = useState([])

  const fetchVideoInfo = async () => {
    try {
      let response = await fetchVideos();
      if (response) {


        let arrayOfIds = []
        // console.log(response.data)

        //push data for each video to array 
        for (let i = 0; i < response.data.length; i++) {
          // arrayOfIds.push(response.data[i].uri.substr(8))
          arrayOfIds.push(response.data[i])
        }

        //need to remove part of uri string for each uri element in arrayofVids
        for (let j = 0; j < arrayOfIds.length; j++) {
          arrayOfIds[j].uri = arrayOfIds[j].uri.substr(8)
        }

        console.log(arrayOfIds)
        setVideoIds(arrayOfIds)


      } else {
        console.log(response.error.message);
      }
    } catch (err) {
      console.error('error occurred getting videos: ', err);
    }
  }

  const mapVideos = (array) => {
    return (
      array.map((each, index) => {
        return (
          <div style={{ border: '4px solid black', position: 'relative', padding: '15% 0 0 0' }}>
            <h1>{each.name}</h1>

            <iframe key={index} title='yes' src={`https://player.vimeo.com/video/${each.uri}?loop=1&byline=0&portrait=0`} style={{ top: 0, left: 0, width: '100%', height: '100%' }} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen>
            </iframe>
            <p>{each.description}</p>

            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
        )
      })
    )
  }

  // <div style="padding:56.25% 0 0 0;position:relative;">
  // style="position:absolute;top:0;left:0;width:100%;height:100%;"


  return (

    <div className="App">

      <button onClick={fetchVideoInfo}>Click for embeds</button>

      <div>
        {mapVideos(videoIds)}
      </div>
    </div>
  );
}

export default VideoFrame;