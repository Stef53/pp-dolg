const {Vacancy} = require('../models/models')
const ApiError = require('../errors/ApiError')


class VacancyController {
  async create(req, res, next) {
    try{
      const {title, description, employmentTypeId, specialtyId, userId} = req.body
      const vacancy = await Vacancy.create({title, description, employmentTypeId, specialtyId, userId})
  
      return res.json(vacancy)
    } catch (e){
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    let {employmentTypeId, specialtyId, limit, page} = req.query
    page = page || 1
    limit = limit || 10
    let offset = page * limit - limit
    let vacancies;
    if (!employmentTypeId && !specialtyId){
      vacancies = await Vacancy.findAndCountAll({limit, offset})
    }
    if (employmentTypeId && !specialtyId){
      vacancies = await Vacancy.findAndCountAll({where:{employmentTypeId}, limit, offset})
    }
    if (!employmentTypeId && specialtyId){
      vacancies = await Vacancy.findAndCountAll({where:{specialtyId}, limit, offset})
    }
    if (employmentTypeId && specialtyId){
      vacancies = await Vacancy.findAndCountAll({where:{employmentTypeId, specialtyId}, limit, offset})
    }
    return res.json(vacancies)
  }

  async getOne(req, res) {
    const {id} = req.params
    const vacancy = await Vacancy.findOne(
      {
        where:{id},
      }
    )
    return res.json(vacancy)
  }

  async delete(req, res) {
    
  }
}

module.exports = new VacancyController()