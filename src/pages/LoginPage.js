import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';


const Login = ({ isLoggedIn, handleLogout, handleLogin }) => {

  if (isLoggedIn) {
    // return <div>
    //   <button onClick={handleLogout}>Logout</button>
    //   <div>
    //     <Link to='/'>Home</Link>
    //   </div>
    // </div>
    return <Redirect to='/' />

  }

  return (
    <div>
      {/* <div>
        <Link to='/'>Home</Link>
      </div> */}


      <div style={{ padding: '20px' }}>
        <h3> Login </h3>
        <Form onSubmit={handleLogin}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="text" name="username" id="username" required />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" required />
          </FormGroup>
          <Button color="primary">BLASTOFF!</Button> &nbsp; OR &nbsp;&nbsp;
          <Button color="success"><Link style={{ textDecoration: 'none', color: 'white' }} to='/signup'>REGISTER</Link></Button>
        </Form>
      </div>





    </div>
  );
};

export default Login;