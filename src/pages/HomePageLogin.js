import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button } from 'reactstrap';
const HomePage = ({ isLoggedIn, user, handleLogout }) => {

  return (

    // <div className='auth-bar' style={{
    //   border: '10px solid purple', textAlign: 'center'
    // }}>
    <Navbar className='auth-bar' >
      <p>('/')LOG IN TO SAVE Favorites!</p>
      {
        user &&
        <div>
          Hi {user.username}
        </div>
      }
      {
        !isLoggedIn
          ?
          <div>
            <div>
              <Link to='/login'>Login</Link>
            </div>
            <div>
              <Link to='/signup'>Signup</Link>
            </div>
          </div>
          :
          <Button color='danger' onClick={handleLogout}>Logoutttt</Button>
      }
    </Navbar>
    // </div >
  );
};

export default HomePage;