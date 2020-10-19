import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import {axiosWithAuth} from '../util/axiosWithAuth'
import Styled from 'styled-components'
import '../Index.css'
import '.././styles.scss'

const LoginFormContainer = Styled.div`
width: 100vw;
background-image: url('https://www.pcclean.io/wp-content/uploads/2020/4/nuqU3e.jpg');
background-repeat: no-repeat;
-webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

border-top: 20px solid;
border-bottom: 20px solid;
border-image-source: url('https://i.pinimg.com/originals/c4/f3/f9/c4f3f9c5014ef1f7dc7ea902b91ec13d.jpg');
border-image-slice: 60 30;
`

const LoginForm = Styled.form`

/* background-color: black; */
margin-top: -1rem;

`

const LoginFormTitle = Styled.h1`

@keyframes example {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
    
  }

  @-webkit-keyframes example {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
  
  /* background: -webkit-linear-gradient(#008aff, #86d472); */
  background: linear-gradient(270deg, #008aff, #86d472);
  background-size: 400% 400%;
  -webkit-animation: example 4s ease infinite;
  -moz-animation: example 4s ease infinite;
  animation: example 4s ease infinite;
  font-family: 'Gochi Hand', cursive;
  font-size: 12rem;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 

  @media only screen and (max-width: 375px) {
    font-size: 6rem;
  }

`

const LoginFormButton = Styled.button`
 background-image: linear-gradient(135deg, #008aff, #86d472);
  border-radius: 6px;
  box-sizing: border-box;
  color: #ffffff;
  display: block;
  height: 50px;
  font-size: 1.4em;
  font-weight: 600;
  padding: 4px;
  position: relative;
  text-decoration: none;
  width: 7em;
  z-index: 2;
  margin: 0 auto;
  margin-top: 1rem;
  cursor: pointer;
 
  :hover {
  color: #fff;
}

/* @media only screen and (max-width: 375px) {
    color:red;
  } */

`

const LoginFormButtonSpan = Styled.span`

    align-items: center;
    background: #1d1d1d;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    height: 100%;
    transition: background 0.5s ease;
    width: 100%;

:hover{
    background: transparent;
  }
`

const LoginFormInput = Styled.input`

/* background-image: linear-gradient(135deg, #008aff, #86d472); */
  border-radius: 6px;
  box-sizing: border-box;
  color: #ffffff;
  display: block;
  font-size: 1.4em;
  font-weight: 600;
  padding: 4px;
  position: relative;
  text-decoration: none;
  height: 50px;
  width: 15em;
  z-index: 2;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;

  ::placeholder {
    color:white;
  }
  @keyframes example {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
    
  }

  /* -webkit-background-clip: text!important; */
  background: linear-gradient(270deg, #008aff, #86d472);
  background-size: 400% 400%;
  -webkit-animation: example 3s ease infinite;
  -moz-animation: example 3s ease infinite;
  animation: example 3s ease infinite;
  font-family: 'Gochi Hand', cursive;
  -webkit-text-fill-color: solid; 
  color:white;
  

  :hover {
  color: #fff;

  @media only screen and (max-width: 375px) {
    width: 7em;
  }
}

`


const loginInfo = {
  username: 'admin',
  password: 'test'
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

    
    <LoginFormTitle>Bubbles</LoginFormTitle>
    <LoginForm onSubmit={submitHandler}>

    <LoginFormInput
      placeholder='Username...'
      name='username'
      type='text'
      value={creds.username}
      onChange={changeHandler}
      />
    
    <LoginFormInput
      placeholder='Password...'
      name='password'
      type='password'
      value={creds.password}
      onChange={changeHandler}
      />

    <LoginFormButton ><LoginFormButtonSpan>Login</LoginFormButtonSpan></LoginFormButton>

  </LoginForm>
  </LoginFormContainer>
  );
};

export default Login;
