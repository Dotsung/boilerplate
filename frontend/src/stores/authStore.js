import { observable, action } from 'mobx'
import * as AuthAPI from 'lib/api/auth';

class AuthStore {
  @observable userList

  constructor() {
    this.userList = []
  }

  @action.bound
  addUser(newUser) {
    this.userList.push(newUser)
  }
}

export default AuthStore