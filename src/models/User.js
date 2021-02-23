import avatarImg from '../assets/img/data/avatar.jpg'
export default class User {
  constructor(data) {
    this.idUser = data.uid
    this.nick = data.nick
    this.email = data.email
    this.changePassword = data.changePassword
    this.avatar = data.avatar || avatarImg
  }
}
