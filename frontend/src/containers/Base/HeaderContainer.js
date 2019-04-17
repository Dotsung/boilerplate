import React, { Component } from 'react';
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import Header from 'components/Base/Header';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: 1px solid #000000;
`

@inject("authToggle")
class HeaderContainer extends Component {
    render() {
        const { ModalToggle } = this.props.authToggle;
        return (
            <Header>
                <StyledButton onClick={ModalToggle}>Login</StyledButton>
            </Header>
        );
    }
}

export default HeaderContainer;