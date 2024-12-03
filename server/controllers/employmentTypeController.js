const { EmploymentType } = require('../models/models');
const ApiError = require('../errors/ApiError');

class EmploymentTypeController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const employmentType = await EmploymentType.create({ name });
      return res.json({ employmentType });
    } catch (error) {
      return next(ApiError.internal("Ошибка при создании типа занятости"));
    }
  }

  async getAll(req, res, next) {
    try {
      const employmentTypes = await EmploymentType.findAll();
      return res.json(employmentTypes);
    } catch (error) {
      return next(ApiError.internal("Ошибка при получении типов занятости"));
    }
  }
}

module.exports = new EmploymentTypeController();