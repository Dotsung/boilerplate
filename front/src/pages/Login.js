// @flow
import React from 'react';
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'

@inject("testStore")

@observer
class Login extends React.Component {
  @observable email = ''
  @observable passwords = ''

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  render() {
    const { email, password } = this

    return (
      <div className="login-form">
          <input name="email" placeholder="Email" onChange={this.onChange} value={email} fluid />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.onChange}
            value={password}
            fluid
          />
        <button onClick={this.onSubmit}>Submit</button>
        <div>
          <p>현재 유저 목록</p>
          {this.props.testStore.userList.map((user, index) => {
            return (
              <div>
                <p>이름: {user.email}</p>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

@observer
class SignUp extends React.Component {
  @observable name = ''
  @observable email = ''
  @observable passwords = ''

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  render() {
    return(
      <div clasName="sign-up-container">
        <input name="name" placeholder="Name" onChange={this.onChange} value={name} fluid />
        <input name="email" placeholder="Email" onChange={this.onChange} value={email} fluid />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.onChange}
            value={password}
            fluid
          />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    )
  }
  
  @action.bound
  onChange(event) {
    const { name, value } = event.target;
    this[name] = value;
  }

  onSubmit() {
    const { email, password } = this
    this.props.testStore.addUser({ email, password })
  }
}

export default Login;