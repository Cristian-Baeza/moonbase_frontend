const fetchArticles = async (filters = null) => {
  try {
    let response = await fetch('https://newsapi.org/v2/everything?q=+ufc&language=en&pageSize=10&apiKey=d536a0e73169448f8c515290d52f4941');
    let data = await response.json();
    return data;
  } catch (error) {
    // handle the error
    console.log('error found')
  }
}

export {
  fetchArticles
}