const { Status } = require('../models/models');
const ApiError = require('../errors/ApiError');

class StatusController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const status = await Status.create({ name });
      return res.json({ status });
    } catch (error) {
      return next(ApiError.internal("Ошибка при создании статуса"));
    }
  }

  async getAll(req, res, next) {
    try {
      const statuses = await Status.findAll();
      return res.json(statuses);
    } catch (error) {
      return next(ApiError.internal("Ошибка при получении статусов"));
    }
  }
}

module.exports = new StatusController();