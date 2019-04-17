// @flow
import React from 'react';
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import { SignUpContainer, Form, StyledH1, SocialContainer, SocialA, StyledSpan, StyledInput, StyledButton } from 'components/Auth/Style';
import * as AuthApi from 'lib/api/auth';

@inject("authToggle")
@observer
class SignUp extends React.Component {
  @observable userName = ''
  @observable email = ''
  @observable passwords = ''

  render() {
    const { userName, email, password } = this
    const { rightPanelActive } = this.props.authToggle;

    return(
      <SignUpContainer rightPanelActive={rightPanelActive}>
        <Form>
          <StyledH1>Create Account</StyledH1>
          <SocialContainer>
            <SocialA><i className="fab fa-facebook-f"></i></SocialA>
            <SocialA><i className="fab fa-google-plus-g"></i></SocialA>
            <SocialA><i className="fab fa-linkedin-in"></i></SocialA>
          </SocialContainer>
          <StyledSpan>or use your email for registration</StyledSpan>
          <StyledInput name="userName" placeholder="Name" onChange={this.onChange} value={userName} onKeyPress={this.onPress} />
          <StyledInput name="email" placeholder="Email" onChange={this.onChange} value={email} onKeyPress={this.onPress} />
          <StyledInput
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.onChange}
            value={password}
            onKeyPress={this.onPress} 
          />
          <StyledButton onClick={this.onSubmit}>Sign Up</StyledButton>
        </Form>
      </SignUpContainer>
    )
  }

  @action.bound
  onPress(f){
    if(f.key == 'Enter'){
      this.onSubmit();
    }
  }
  
  @action.bound
  onChange(event) {
    const { name, value } = event.target;
    this[name] = value;
  }

  @action.bound
  onSubmit() {
    const { userName, email, password } = this;
    AuthApi.localRegister({
      "email": email, 
      "username": userName, 
      "password": password
    });
  }
}

export default SignUp;