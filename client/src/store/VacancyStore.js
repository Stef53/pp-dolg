import { makeAutoObservable } from 'mobx'

export default class VacancyStore {
  constructor() {
    this._employmentTypes = [
      { id: 1, name: 'Стажировка' },
      { id: 2, name: 'Подработка' },
      { id: 3, name: 'Проектная работа' },
    ]
    this._specialties = [
      { id: 1, name: 'Frontend-разработчик' },
      { id: 2, name: 'Backend-разработчик' },
      { id: 3, name: 'Бизнес-аналитик' },
    ]
    this._districts = [
      { id: 1, name: 'Ленинский' },
      { id: 2, name: 'Верх-Исетский' },
      { id: 3, name: 'Какой-нибудь' },
    ]
    this._vacancies = [
      { id: 1, title: "Frontend-разработчик в Сбер", description: 'Требуется блаблабла', company: 'Сбер' },
      { id: 2, title: "Backend-разработчик в Контур", description: 'Требуется блаблабла', company: 'Контур' },
      { id: 3, title: "Бизнес-аналитик в Яндекс", description: 'Требуется блаблабла', company: 'Яндекс' },
      { id: 4, title: "Дизайнер в Озон", description: 'Требуется блаблабла', company: 'Озон' }
    ]
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