import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../api/NewsApi';


function News(props) {

  const [articles, setArticles] = useState([]);


  const fetchArticleInfo = async () => {
    try {
      let response = await fetchArticles();
      // let arrayOfVideos = 
      if (response) {

        // console.log(response.articles[0].title)
        // console.log(response.articles[0].description)
        // console.log(response.articles[0].url)
        // console.log(response.articles[0].urlToImage)

        setArticles(response.articles)

        console.log(articles)

      } else {
        console.log(response.error.message);
      }
    } catch (err) {
      console.error('error occurred getting videos: ', err);
    }
  }

  useEffect(() => {
    fetchArticleInfo()
  }, [])


  const mapArticles = (array) => {
    return (
      array.map((each, index) => {
        return (
          <div className='news-card'>
            <h1><a style={{ textDecoration: 'underline' }} href={each.url} target='_blank' rel='noreferrer'>{each.title}</a></h1>

            <p><img src={each.urlToImage} alt="" />{each.description}</p>

          </div>
        )
      })
    )
  }

  return (
    <div className='news-page'>
      <div className='news-page-header'>
        <h1>MOST RECENT FIGHT NEWS</h1>
      </div>
      {mapArticles(articles)}
    </div>
  );
}

export default News;