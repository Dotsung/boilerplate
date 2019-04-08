// @flow
import React from 'react';
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import db from 'shared/firebaseInit';
import styled from 'styled-components';
import SignUp from 'components/Auth/SignUp';
import SignIn from 'components/Auth/SignIn';
import Overlay from 'components/Auth/Overlay';
import { Div, Container} from 'components/Auth/Style';

@inject("testStore")

@observer
class Auth extends React.Component {

  render() {
    return (
      <Div>
        <Container>
            <SignUp />
            <SignIn />
            <Overlay />
        </Container>
      </Div>
    );
  }
}

export default Auth;