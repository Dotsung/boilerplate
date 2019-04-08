// @flow
import React from 'react';
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import styled, { keyframes } from 'styled-components';
import { OverlayContainer, OverlayDiv, OverlayPanel, StyledH1, StyledP, StyledButton } from 'components/Auth/Style';

@observer
class Overlay extends React.Component {
  @observable rightPanelActive = false;
  render(){
    const { rightPanelActive } = this;
    return (
      <OverlayContainer>
          <OverlayDiv>
              <OverlayPanel left={true} rightPanelActive={rightPanelActive}>
                  <StyledH1>Welcome Back!</StyledH1>
                  <StyledP>
                    To keep connected with us please login with your personal info
                  </StyledP>
                  <StyledButton ghost={true} onClick={this.Toggle}>Sign In</StyledButton>
              </OverlayPanel>
              <OverlayPanel right={true} rightPanelActive={rightPanelActive}>
                  <StyledH1>Hello, Friend!</StyledH1>
                  <StyledP>
                    Enter your personal details and start journey with us
                  </StyledP>
                  <StyledButton ghost={true} onClick={this.Toggle}>Sign Up</StyledButton>
              </OverlayPanel>
          </OverlayDiv>
      </OverlayContainer>
    )
  }

  @action.bound
  Toggle(event) {
    this.rightPanelActive = !this.rightPanelActive;
  }
}

export default Overlay;