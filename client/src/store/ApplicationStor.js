import {makeAutoObservable} from 'mobx'

export default class ApplicationStore {
  constructor() {
    this._applications = []
    this._statuses = []
    makeAutoObservable(this)
  }

  setApplications(applications) {
    this._applications = applications
  }
  setStatuses(status) {
    this._statuses = status
  }

  get applications() {
    return this._applications
  }
  get statuses() {
    return this._statuses
  }
}