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
  ModalToggle() {
    this.authOn = !this.authOn;
  }
}

export default AuthToggle