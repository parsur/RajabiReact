import React, { useState } from 'react';
import {
  Container,
  MainLoginPage,
  Top,
  Bottom,
  Logo,
  InputContainer,
  Input,
  Submit,
  H2
} from './LoginElements';
import LoginLogo from '../../images/LoginLogo.svg';
import axios from 'axios';

axios.defaults.withCredentials = true;

const Login = () => {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  const token = 'parsur';

  function submit(){
    axios.get('http://sararajabi.com/sanctum/csrf-cookie', {
      withCredentials: true,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN"
    }).then(response => {
      axios.post('http://sararajabi.com/api/login', {
        email: email,
        password: pass,
    }, {
        headers: {
          'api_key': `${token}` 
        },
        withCredentials: true,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN"
      }
    )
    .then(function (response) {
        // setCourse(response.data);
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
    });

    
}

  return (
    <Container>
      <MainLoginPage>
        <Top to="/">
          <Logo src={LoginLogo} alt="login logo"/>
        </Top>
        <Bottom>
          <H2>ورود</H2>
          <InputContainer>
            <Input onChange={event => setEmail(event.target.value)} top="true" type="email" placeholder="نام شما"/>
          </InputContainer>
          <InputContainer>
            <Input onChange={event => setPass(event.target.value)} type="password" placeholder="ایمیل شما"/>
          </InputContainer>
          <InputContainer>
            <Submit onClick={()=>submit()}>ورود</Submit>
          </InputContainer>
        </Bottom>
      </MainLoginPage>
    </Container>
  )
}

export default Login;