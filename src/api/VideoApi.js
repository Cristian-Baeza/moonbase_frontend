const fetchVideos = async () => {
  try {
    const response = await fetch('https://api.vimeo.com/users/138237742/albums/8377782/videos', {
      headers: {
        'Authorization': 'bearer 80b4cd067ed9709f0e2f0c4702156bca'
      }
    });
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.log('error found')
  }
};



export {
  fetchVideos,
}
