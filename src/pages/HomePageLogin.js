import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button, Nav, NavbarBrand, NavLink, NavbarText, NavItem, } from 'reactstrap';
const HomePage = ({ isLoggedIn, user, handleLogout }) => {

  return (

    <Navbar className='auth-bar' >



      <Link>('/')LOGIN/SIGNUP TO SAVE YOUR FAVORITES!</Link>
      {
        user &&
        <Link>
          ACCOUNT: {user.username}
        </Link>
      }
      {
        !isLoggedIn
          ?
          <div>

            <Button color="success"><Link style={{ textDecoration: 'none', color: 'white' }} to='/login'>LOGIN</Link></Button>&nbsp; OR &nbsp;&nbsp;

            <Button color="primary"><Link style={{ textDecoration: 'none', color: 'white' }} to='/signup'>SIGN UP</Link></Button>

          </div>
          :
          <>
            <Button color='primary'><Link style={{ textDecoration: 'none', color: 'white' }} to='/'>MY FAVS</Link></Button>
            <Button color='danger' onClick={handleLogout}>LOGOUT</Button>
          </>
      }


    </Navbar>

  );
};

export default HomePage;