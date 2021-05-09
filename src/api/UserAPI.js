
const getLoggedInUser = (token) => {
  return fetch('https://moonbase-backend.herokuapp.com/core/current_user/', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    }
  }).then(res => res)
};

const signupUser = (userObject) => {
  return fetch('https://moonbase-backend.herokuapp.com/core/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObject)
  }).then(res => res)
};

const login = (userObject) => {
  return fetch('https://moonbase-backend.herokuapp.com/token-auth/', {
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
    let response = await fetch('https://moonbase-backend.herokuapp.com/core/current_user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      }
    });
    let data = await response.json();
    return data;
  } catch (error) {
    // handle the error
    console.log('error found')
  }
}



//post favorites to account http://localhost:8000/core/favorites/
const addToFavoritesDb = async (token, videoObject) => {
  return fetch('https://moonbase-backend.herokuapp.com/core/favorites/', {
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
  return fetch(`https://moonbase-backend.herokuapp.com/core/favorites/${favoriteId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    },
  }).then(res => res)
};




export { login, getLoggedInUser, signupUser, fetchFavorites, addToFavoritesDb, deleteFavorite }
