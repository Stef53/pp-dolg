import {makeAutoObservable} from 'mobx'

export default class ProfileStore {
  constructor() {
    this._studentProfile = {}
    makeAutoObservable(this)
  }

  setStudentProfile(studentProfile) {
    this._studentProfile = studentProfile
  }

  get studentProfile() {
    return this._studentProfile
  }
}