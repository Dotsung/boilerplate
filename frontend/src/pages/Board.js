// @flow
import React from 'react';
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components';

import HeaderContainer from 'containers/Base/HeaderContainer';
import AuthContainer from 'containers/Auth/AuthContainer';
import BoardContainer from 'containers/BoardContainer';

const Content = styled.div`
  margin-top: 60px;
`

@inject("authToggle")
@observer
class Auth extends React.Component {
  render() {

    const { authOn, ModalOff } = this.props.authToggle;

    return (
      <div>
        <HeaderContainer/>
        <AuthContainer />
        <Content>
            <BoardContainer/>
        </Content>
      </div>
    );
  }

}

export default Auth;