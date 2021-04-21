import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button, Nav, NavbarBrand, NavLink, NavbarText, NavItem, } from 'reactstrap';
const HomePage = ({ isLoggedIn, user, handleLogout }) => {

  return (

    <Navbar className='auth-bar' >

      <div>

        <p>('/')LOGIN/SIGNUP TO SAVE FAVORITES!</p>
        {
          user &&
          <div>
            ACCOUNT: {user.username}
          </div>
        }
        {
          !isLoggedIn
            ?
            <div>

              <Button color="success"><Link style={{ textDecoration: 'none', color: 'white' }} to='/login'>LOGIN</Link></Button>


              <Button color="primary"><Link style={{ textDecoration: 'none', color: 'white' }} to='/signup'>SIGN UP</Link></Button>

            </div>
            :
            <>
              <Button color='primary'>MY FAVS</Button>&nbsp;&nbsp;
              <Button color='danger' onClick={handleLogout}>LOGOUT</Button>
            </>
        }

      </div>

    </Navbar>

  );
};

export default HomePage;