import { observable, action } from 'mobx'

class AuthToggle {
  @observable rightPanelActive

  constructor() {
    this.rightPanelActive = false;
  }

  @action.bound
  Toggle() {
    this.rightPanelActive = !this.rightPanelActive;
  }
}

export default AuthToggle