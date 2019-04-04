// @flow
import React from 'react';
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import db from 'shared/firebaseInit';

@inject("testStore")

@observer
class Auth extends React.Component {
  render() {
    return (
      <div className="login-form">
        <SignUp />
      </div>
    );
  }
}

@observer
class SignUp extends React.Component {
  @observable userName = ''
  @observable email = ''
  @observable passwords = ''

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  render() {
    const { userName, email, password } = this

    return(
      <div className="sign-up-container">
        <input name="userName" placeholder="Name" onChange={this.onChange} value={userName} />
        <input name="email" placeholder="Email" onChange={this.onChange} value={email} />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={this.onChange}
          value={password}
        />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    )
  }
  
  @action.bound
  onChange(event) {
    const { name, value } = event.target;
    this[name] = value;
    console.log(name, value);
  }

  onSubmit() {
    const { userName, email, password } = this
    const userRef = db.collection('users').add({
      userName: userName,
      email: email,
      password: password
    }); 
  }
}

export default Auth;