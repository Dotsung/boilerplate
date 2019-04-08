import styled, { keyframes } from 'styled-components';

export const Div = styled.div`
  position: relative;
`

export const Container = styled.div`
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

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${
    props => {
      if(props.rightPanelActive){
        return `transform: translateX(100%);`
      }
    }
  }
`

export const StyledH1 = styled.h1`
  font-weight: bold;
  margin: 0;
`

export const StyledP = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`

export const StyledSpan = styled.span`
  font-size: 12px;
`

export const StyledA = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`

export const StyledButton = styled.button`
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

export const Form = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`

export const StyledInput = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`
export const SocialContainer = styled.div`
  margin: 20px 0;
`

export const SocialA = styled.a`
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
`

export const Show = keyframes`
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

export const OverlayContainer = styled.div`
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

export const OverlayDiv = styled.div`
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

export const OverlayPanel = styled.div`
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

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  ${
    props => {
      if(props.rightPanelActive){
        return `
          transform: translateX(100%);
          opacity: 1;
          z-index: 5;
          animation: ${Show} 0.6s;
        `
      }
      else{
        return `
          opacity: 0;
          z-index: 1;
        `
      }
    }
  }
`