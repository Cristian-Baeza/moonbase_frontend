import React from 'react';
import { signupUser } from '../api/UserAPI';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label, FormFeedback, FormText } from 'reactstrap';

const SignupPage = (props) => {
  const { history } = props;
  const handleSignup = async (evt) => {
    evt.preventDefault();
    let userObject = {
      'username': evt.target.username.value,
      'password': evt.target.password.value,
    }
    let response = await signupUser(userObject);
    let data = await response.json();
    if (data.error) {
      console.log('there was an error signing up');
    } else {
      history.push('/login');
    }

  }

  return (
    <div>

      <div className='signup-page' style={{ padding: '20px' }}>
        <div className='signup-form'>
          <h3> REGISTER MOONHEAD </h3>
          <Form onSubmit={handleSignup}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="email" name="username" id="username" required />
              <FormText>Must be an email foo</FormText>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder='Even dirtier' required />
            </FormGroup>
            {/* AFTER CLICK REDIRECTS TO /login PAGE */}
            <Button color="primary">YOU HAVE MY SWORD!</Button> &nbsp; OR &nbsp;&nbsp;
          <Button color="success"><Link style={{ textDecoration: 'none', color: 'white' }} to='/login'>LOGIN</Link></Button>

          </Form>
        </div>
      </div>




    </div>
  );
};

export default SignupPage;