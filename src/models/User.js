export default class User {
  constructor(data) {
    this.idUser = data.uid
    this.nick = data.nick
    this.email = data.email
    this.changePassword = data.changePassword
  }
}
