import { observable, action } from 'mobx';
import * as AuthAPI from 'lib/api/auth';

class AuthStore {
  @observable token

  constructor() {
    this.token = ''
  }

  @action.bound
  Login({email, password}) {
    AuthAPI.localLogin({email, password})
    .then((res) => {
      this.token = res.data.token;
    })
  }
}

export default AuthStore