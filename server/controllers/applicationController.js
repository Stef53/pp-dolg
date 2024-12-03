const {Application} = require('../models/models')
const ApiError = require('../errors/ApiError')
const uuid = require('uuid')
const path = require('path')

class ApplicationController {
  async create(req, res, next) {
    try{
      const {coverLetter, userId, vacancyId} = req.body
      const statusId = "1"
      const {resume} = req.files
      let fileName = uuid.v4() + ".doc"
      resume.mv(path.resolve(__dirname, '..', 'static', fileName))
      const aplication = await Application.create({coverLetter, resume:fileName, userId, statusId, vacancyId})

      return res.json(aplication)
    } catch (e){
      return next(ApiError.badRequest(e.message))
    }
  }

  async getOne(req, res) {
    const {id} = req.params
    const application = await Application.findOne(
      {
        where:{id},
      }
    )
    return res.json(application)
  }
}

module.exports = new ApplicationController()