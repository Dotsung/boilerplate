// @flow
import React from 'react';
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import db from 'shared/firebaseInit';
import styled from 'styled-components';

const SignInContainer = styled.div`
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

const StyledSpan = styled.span`
  font-size: 12px;
`

const StyledA = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`

const StyledButton = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  
  &:active{
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`
// ghostButton 추가해야함

const Form = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`

const StyledInput = styled.div`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`
const SocialContainer = styled.div`
  margin: 20px 0;
`

const SocialA = styled.a`
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
`

@observer
class SignIn extends React.Component {
  @observable email = ''
  @observable passwords = ''

  render() {
    const { email, password } = this

    return(
      <SignInContainer>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>
        <Form>
        <StyledH1>Sign in</StyledH1>
        <SocialContainer>
            <SocialA><i class="fab fa-facebook-f"></i></SocialA>
            <SocialA><i class="fab fa-google-plus-g"></i></SocialA>
            <SocialA><i class="fab fa-linkedin-in"></i></SocialA>
          </SocialContainer>
          <StyledSpan>or use your account</StyledSpan>
          <StyledInput name="email" placeholder="Email" onChange={this.onChange} value={email} />
          <StyledInput
          name="password"
          type="password"
          placeholder="Password"
          onChange={this.onChange}
          value={password}
        />
        <StyledA>Forgot your password?</StyledA>
        <StyledButton onClick={this.onSubmit}>Submit</StyledButton>
        </Form>
      </SignInContainer>
    )
  }
  
  @action.bound
  onChange(event) {
    const { name, value } = event.target;
    this[name] = value;
    console.log(name, value);
  }

  @action.bound
  onSubmit() {
    const { userName, email, password } = this
    const userRef = db.collection('users').add({
      userName: userName,
      email: email,
      password: password
    }); 
  }
}

export default SignIn;