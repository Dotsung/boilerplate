// @flow
import React from 'react';
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import styled, { keyframes } from 'styled-components';
import { OverlayContainer, OverlayDiv, OverlayPanel, StyledH1, StyledP, StyledButton } from 'components/Auth/Style';

@inject("authToggle")
@observer
class Overlay extends React.Component {
  @observable rightPanelActive = false;
  render(){
    const { rightPanelActive, Toggle } = this.props.authToggle;
    return (
      <OverlayContainer rightPanelActive={rightPanelActive}>
          <OverlayDiv rightPanelActive={rightPanelActive}>
              <OverlayPanel left={true} rightPanelActive={rightPanelActive}>
                  <StyledH1>Welcome Back!</StyledH1>
                  <StyledP>
                    To keep connected with us please login with your personal info
                  </StyledP>
                  <StyledButton ghost={true} onClick={Toggle}>Sign In</StyledButton>
              </OverlayPanel>
              <OverlayPanel right={true} rightPanelActive={rightPanelActive}>
                  <StyledH1>Hello, Friend!</StyledH1>
                  <StyledP>
                    Enter your personal details and start journey with us
                  </StyledP>
                  <StyledButton ghost={true} onClick={Toggle}>Sign Up</StyledButton>
              </OverlayPanel>
          </OverlayDiv>
      </OverlayContainer>
    )
  }
}

export default Overlay;