
const getLoggedInUser = (token) => {
  return fetch('http://localhost:8000/core/current_user/', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    }
  }).then(res => res)
};

const signupUser = (userObject) => {
  return fetch('http://localhost:8000/core/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObject)
  }).then(res => res)
};

// get favorites on user account db
const fetchFavorites = async (token) => {
  try {
    let response = await fetch('http://localhost:8000/core/current_user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
        // origin: 'http://localhost:3000/'
      }
    });
    let data = await response.json();
    return data;
  } catch (error) {
    // handle the error
    console.log('error found')
  }
}

const login = (userObject) => {
  return fetch('http://localhost:8000/token-auth/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObject)
  }).then(res => res)
};


//post favorites to account http://localhost:8000/core/favorites/
const addToFavoritesDb = async (token, videoObject) => {
  return fetch('http://localhost:8000/core/favorites/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    },
    body: JSON.stringify(videoObject)
  }).then(res => res)
};


//delete favorite from account http://localhost:8000/core/favorites/
const deleteFavorite = async (token, favoriteId) => {
  return fetch(`http://localhost:8000/core/favorites/${favoriteId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    },
  }).then(res => res)
};




export { login, getLoggedInUser, signupUser, fetchFavorites, addToFavoritesDb, deleteFavorite }
