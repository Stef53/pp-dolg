const { District } = require('../models/models');
const ApiError = require('../errors/ApiError');

class DistrictController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const district = await District.create({ name });
      return res.json({ district });
    } catch (error) {
      return next(ApiError.internal("Ошибка при создании района"));
    }
  }

  async getAll(req, res, next) {
    try {
      const district = await District.findAll();
      return res.json(district);
    } catch (error) {
      return next(ApiError.internal("Ошибка при получении районов"));
    }
  }
}

module.exports = new DistrictController();