// @flow
import React from 'react';
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import db from 'shared/firebaseInit';
import styled, { keyframes } from 'styled-components';
import { SignInContainer, FormContainer, Form, StyledH1, SocialContainer, SocialA, StyledSpan, StyledInput, StyledA, StyledButton } from 'components/Auth/Style';

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