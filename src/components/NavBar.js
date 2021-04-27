import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { motion } from "framer-motion";
import { LinkContainer } from 'react-router-bootstrap';


function NavBar(props) {
  return (
    <Navbar className='realnavbar' collapseOnSelect expand="md" variant="dark">

      <Navbar.Brand className="mr-auto" href="/">
        <div className='logo-div'>

          {/* ANIMATION FOR LOGO */}
          <motion.div
            animate={{
              x: 0,
              y: 0,
              scale: [1, 1.3, 1.3, 1, 1],
              rotate: [0, 0, 360, 360, 0],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              loop: Infinity,
              repeatDelay: 1
            }}
          >
            <img src="https://ik.imagekit.io/0jty0e7po/10p-logo_cwXAiI-Ff.png" className="rounded-circle image" alt="10p logo" />
          </motion.div>


        </div>
      </Navbar.Brand>

      <motion.div animate={{
        x: 100,
        y: 0,
      }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          loop: Infinity,
          repeatDelay: 1
        }} >
        <div id='logo-word' className='d-none d-lg-block'>
          <h1>
            <img style={{ paddingBottom: '10px', borderRadius: '25px' }} width="100" height="80" src="https://ik.imagekit.io/0jty0e7po/Screen_Shot_2021-04-27_at_1.22.33_PM_I_7p379Md.png" alt="" />MOONBASE<img style={{ paddingBottom: '10px', borderRadius: '25px' }} width="90" height="50" src="https://ik.imagekit.io/0jty0e7po/Screen_Shot_2021-04-27_at_1.36.18_PM_qGOSPqx6_.png" alt="" />
          </h1>
          {/* <h1 id='slc'>SLC</h1> */}
        </div>
      </motion.div>


      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='ml-auto'>

          <motion.div whileHover={{ scale: 1.5 }}>
            <LinkContainer to="/">
              <Nav.Link className='nav-link'>
                BASECAMP
            </Nav.Link>
            </LinkContainer>
          </motion.div>

          <motion.div whileHover={{ scale: 1.5 }} >
            <Nav.Link className='nav-link' href="/feed">
              FEED
            </Nav.Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.5 }} >
            <Nav.Link className='nav-link' href="/news">
              NEWS
            </Nav.Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.5 }}>
            <a className='nav-link' target="_blank" href="https://10thplanetsaltlakecity.com" rel="noreferrer">GYM</a>
          </motion.div>


        </Nav>
      </Navbar.Collapse>


    </Navbar>
  );
}

export default NavBar;