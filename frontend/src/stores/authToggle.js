import { observable, action } from 'mobx'

class AuthToggle {
  @observable rightPanelActive
  @observable authOn

  constructor() {
    this.rightPanelActive = false;
    this.authOn = false;
  }

  @action.bound
  Toggle() {
    this.rightPanelActive = !this.rightPanelActive;
  }

  @action.bound
  ModalOn() {
    this.authOn = true;
  }

  @action.bound
  ModalOff() {
    this.authOn = false;
  }
}

export default AuthToggle