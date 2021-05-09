import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button } from 'reactstrap';
const HomePage = ({ isLoggedIn, user, handleLogout }) => {

  return (

    <Navbar className='auth-bar' >

      {
        user &&
        <Link style={{ textDecoration: 'none', color: 'white' }}>
          ACCOUNT: {user.username}
        </Link>
      }
      {
        !isLoggedIn
          ?
          <div>
            <h1>LOGIN TO SAVE YOUR FAVORITES!</h1>

            <div>
              <Button color="success"><Link style={{ textDecoration: 'none', color: 'white' }} to='/login'>LOGIN</Link></Button>&nbsp; OR &nbsp;

            <Button color="primary"><Link style={{ textDecoration: 'none', color: 'white' }} to='/signup'>SIGN UP</Link></Button>
            </div>
          </div>
          :
          <div>
            <Button color='primary'><Link style={{ textDecoration: 'none', color: 'white' }} to='/favorites'>MY FAVS</Link></Button>&nbsp; OR &nbsp;
            <Button color='danger' onClick={handleLogout}>LOGOUT</Button>
          </div>
      }
    </Navbar >
  );
};

export default HomePage;