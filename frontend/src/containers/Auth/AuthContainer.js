// @flow
import React from 'react';
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components';
import SignUp from 'components/Auth/SignUp';
import SignIn from 'components/Auth/SignIn';
import Overlay from 'components/Auth/Overlay';
import { Div, Container} from 'components/Auth/Style';

const Modal = styled.div`
    ${ props => {
        return props.authOn?`display:block`:`display: none;`
    }}
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
`

const ModalBackground = styled.div`
  ${ props => {
    return props.authOn?`display:block`:`display: none;`
  }}
  position: fixed; /* Stay in place */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

@inject("authToggle")
@observer
class AuthContainer extends React.Component {
  render() {

    const { authOn, ModalOff } = this.props.authToggle;

    return (
      <div>
        <Modal authOn={authOn} >
        <ModalBackground authOn={authOn} onClick={ModalOff}/>
          <Div>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"></link>
            <Container>
                <SignUp />
                <SignIn />
                <Overlay />
            </Container>
          </Div>
        </Modal>
      </div>
    );
  }

}

export default AuthContainer;