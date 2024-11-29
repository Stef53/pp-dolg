const {Specialty} = require('../models/models')
const ApiError = require('../errors/ApiError')

class SpecialtyController {
  async create(req, res) {
    const {name} = req.body
    const specialty = await Specialty.create({name})
    return res.json({specialty})
  }

  async getAll(req, res) {
    const specialties = await Specialty.findAll()
    return res.json(specialties)
  }
}

module.exports = new SpecialtyController()