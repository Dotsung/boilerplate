// @flow
import React from 'react';
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import db from 'shared/firebaseInit';
import styled from 'styled-components';
import SignUp from 'components/Auth/SignUp';
import SignIn from 'components/Auth/SignIn';
// import OverLay from 'components/Auth/OverLay';

const Container = styled.div`
height: 50%;
background-color: #ffffff;
border-radius: 10px;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
position:absolute;
left:50%;
top:50%;
overflow: hidden;
width: 768px;
max-width: 100%;
min-height: 480px;
margin-left:-384px;
margin-top:10%;
`

const FormContainer = styled.div`
position: absolute;
top: 0;
height: 100%;
transition: all 0.6s ease-in-out;
`

@inject("testStore")

@observer
class Auth extends React.Component {

  render() {
    return (
      <Container>
        <FormContainer>
          <SignUp />
          <SignIn />
        </FormContainer>
      </Container>
    );
  }
}

export default Auth;