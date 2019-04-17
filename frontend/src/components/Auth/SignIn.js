// @flow
import React from 'react';
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import { SignInContainer, FormContainer, Form, StyledH1, SocialContainer, SocialA, StyledSpan, StyledInput, StyledA, StyledButton } from 'components/Auth/Style';
import * as AuthApi from 'lib/api/auth';

@inject("authToggle")
@observer
class SignIn extends React.Component {
  @observable email = ''
  @observable passwords = ''

  render() {
    const { email, password } = this
    const { rightPanelActive, Toggle } = this.props.authToggle;

    return(
      <SignInContainer rightPanelActive={rightPanelActive}>
          <Form>
            <StyledH1>Sign in</StyledH1>
            <SocialContainer>
                <SocialA><i className="fab fa-facebook-f"></i></SocialA>
                <SocialA><i className="fab fa-google-plus-g"></i></SocialA>
                <SocialA><i className="fab fa-linkedin-in"></i></SocialA>
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
  }

  @action.bound
  onSubmit() {
    const { email, password } = this;
    AuthApi.localLogin({ email, password });
  }
}

export default SignIn;