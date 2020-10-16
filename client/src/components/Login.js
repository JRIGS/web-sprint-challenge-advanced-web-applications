import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import {axiosWithAuth} from '../util/axiosWithAuth'
import Styled from 'styled-components'

const LoginFormContainer = Styled.div`
border: 20px solid black;

`
const LoginFormTitle = Styled.h1`
border: 20px solid black;
color:red;
`

const loginInfo = {
  username: 'Lambda School',
  password: 'i<3Lambd4'
}

const Login = () => {
  
  const { push } = useHistory();
  
  const [creds, setCreds] = useState(loginInfo)
  
  const changeHandler = e => {
    setCreds({ ...creds, [e.target.name]: e.target.value})
  }
  
  const submitHandler = e => {
    e.preventDefault();
    // make a post request to retrieve a token from the api
    axiosWithAuth()
    .post('/api/login', creds)
    .then(res => {
      // when you have handled the token 
      localStorage.setItem('token', res.data.payload);
      // navigate to the BubblePage route
      push('/bubbles')
    })
    .catch(err => console.log(err))

  }

  return (
    
    <LoginFormContainer>

    <form onSubmit={submitHandler}>

    <LoginFormTitle>Welcome to the Bubble App!</LoginFormTitle>

    <input
      name='username'
      type='text'
      value={creds.username}
      onChange={changeHandler}
      />

    <input
      name='password'
      type='password'
      value={creds.password}
      onChange={changeHandler}
      />

    <button >Login</button>

  </form>
  </LoginFormContainer>
  );
};

export default Login;
