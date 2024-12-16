import { makeAutoObservable } from 'mobx'

export default class VacancyStore {
  constructor() {
    this._employmentTypes = []
    this._specialties = []
    this._districts = []
    this._vacancies = []
    this._selectedEmploymentTypes = ''
    this._selectedSpecialties = ''
    this._selectedDistricts = ''
    
    makeAutoObservable(this)
  }

  setEmploymentTypes(employmentTypes) {
    this._employmentTypes = employmentTypes
  }
  setSpecialties(specialties) {
    this._specialties = specialties
  }
  setDistricts(districts) {
    this._districts = districts
  }
  setVacancies(vacancies) {
    this._vacancies = vacancies
  }
  
  setSelectedEmploymentType(employmentType) {
    this._selectedEmploymentTypes = employmentType
  }
  setSelectedSpecialty(specialty) {
    this._selectedSpecialties = specialty
  }
  setSelectedDistrict(district) {
    this._selectedDistricts = district
  }

  get employmentTypes() {
    return this._employmentTypes
  }
  get specialties() {
    return this._specialties
  }
  get districts() {
    return this._districts
  }
  get vacancies() {
    return this._vacancies
  }
  get selectedEmploymentType() {
    return this._selectedEmploymentTypes
  }
  get selectedSpecialty() {
    return this._selectedSpecialties
  }
  get selectedDistrict() {
    return this._selectedDistricts
  }
}