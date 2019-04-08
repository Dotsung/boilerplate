// @flow
import React from 'react';
import styled, { keyframes } from 'styled-components';

const OverlayContainer = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;

    ${
      props => {
        if(props.rightPanelActive){
          return `
            transform: translateX(-100%);
          `
        }
      }
    }
`

const OverlayDiv = styled.div`
    background: #ff416c;
    background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
    background: linear-gradient(to right, #ff4b2b, #ff416c);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;

    ${
      props => {
        if(props.rightPanelActive){
          return `
            transform: translateX(50%);
          `
        }
      }
    }
`

const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;

    ${
      props => {
        if(props.right) {
          if(props.rightPanelActive) {
            return `
              right: 0;
              transform: translateX(20%);
            `
          }
          else {
            return `
              right: 0;
              transform: translateX(0);
            `
          }
        }
        if(props.left) {
          if(props.rightPanelActive) {
            return `
              transform: translateX(0);
            `
          }
          else {
            return `
              transform: translateX(-20%);
            `
          }
        }
      }
  }
`

const StyledH1 = styled.h1`
  font-weight: bold;
  margin: 0;
`

const StyledP = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`

const StyledButton = styled.button`
  border-radius: 20px;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;

  ${
      props => {
          if(props.ghost) {
              return `
                background-color: transparent;
                border-color: #ffffff;
              `
          }
          else{ 
              return `
                border: 1px solid #ff4b2b;
                background-color: #ff4b2b;
            `
          }
      }
  }
  
  &:active{
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`

const Show = keyframes`
    0%
    49.99% {
        opacity: 0;
        z-index: 1;
    }
    50%
    100% {
        opacity: 1;
        z-index: 5;
    }
`

class Overlay extends React.Component {
  render(){
    return (
      <OverlayContainer>
          <OverlayDiv>
              <OverlayPanel left={true}>
                  <StyledH1>Welcome Back!</StyledH1>
                  <StyledP>
                    To keep connected with us please login with your personal info
                  </StyledP>
                  <StyledButton ghost={true}>Sign In</StyledButton>
              </OverlayPanel>
              <OverlayPanel right={true}>
                  <StyledH1>Hello, Friend!</StyledH1>
                  <StyledP>
                    Enter your personal details and start journey with us
                  </StyledP>
                  <StyledButton ghost={true}>Sign Up</StyledButton>
              </OverlayPanel>
          </OverlayDiv>
      </OverlayContainer>
    )
  }
}

export default Overlay;