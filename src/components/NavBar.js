import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { motion } from "framer-motion"

function NavBar(props) {
  return (
    <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">

      <Navbar.Brand className="mr-auto" href="#">
        <div className='logo-div'>

          {/* ANIMATION FOR LOGO */}
          <motion.div
            animate={{
              x: 0,
              y: 0,
              scale: [1, 1.5, 1.5, 1, 1],
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

          <div id='logo-word'>
            <h1>MOONBASE</h1>
          </div>

        </div>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='ml-auto'>

          <motion.div
            whileHover={{ scale: 1.5 }}
          >
            <Nav.Link className='nav-link' href="#">
              BASECAMP
            </Nav.Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.5 }}
          >
            <Nav.Link className='nav-link' href="#">
              DA FEED
            </Nav.Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.5 }}
          >
            <Nav.Link className='nav-link' href="#">
              LINK
            </Nav.Link>
          </motion.div>



        </Nav>
      </Navbar.Collapse>


    </Navbar>
  );
}

export default NavBar;