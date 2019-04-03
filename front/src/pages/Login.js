import React, { Component } from 'react';
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'


@observer
class Login extends Component {
  @observable email = ''
  @observable passwords = ''

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  render() {
    const { email, password } = this

    return (
      <div className="App">
        <header>Login</header>
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
    );
  }

  @action.bound
  onChange(event) {
    const { name, value } = event.target;
    this[name] = value;
  }

  onSubmit() {
    const { email, password } = this
    console.log('결과확인 : ', email, password);
  }
}

export default Login;