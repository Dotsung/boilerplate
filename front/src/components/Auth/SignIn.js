// @flow
import React from 'react';
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import db from 'shared/firebaseInit';

@observer
class SignIn extends React.Component {
  @observable email = ''
  @observable passwords = ''

  render() {
    const { email, password } = this

    return(
      <div className="sign-up-container">
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