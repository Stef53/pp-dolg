const {Application} = require('../models/models')
const ApiError = require('../errors/ApiError')
const uuid = require('uuid')
const path = require('path')

class ApplicationController {
  async create(req, res, next) {
    try {
      const { coverLetter, userId, vacancyId } = req.body;
      const statusId = "1";
      const { resume } = req.files;

      if (!coverLetter) {
        return next(ApiError.badRequest("Сопроводительное письмо не может быть пустым"));
      }

      if (!resume) {
        return next(ApiError.badRequest("Загрузите файл с резюме"));
      }
  
      const allowedExtensions = ['.doc', '.docx'];
      const fileExtension = resume.name.split('.').pop().toLowerCase();
  
      if (!allowedExtensions.includes(`.${fileExtension}`)) {
        return next(ApiError.badRequest("Файл резюме должен быть в формате .doc или .docx"));
      }

      let fileName = uuid.v4() + ".doc";
      await resume.mv(path.resolve(__dirname, '..', 'static', fileName));

      const application = await Application.create({ coverLetter, resume: fileName, userId, statusId, vacancyId });

      return res.json(application);
    } catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { vacancyId, userId } = req.query;
    let application
    if(vacancyId) {
      application = await Application.findAll({ where: { vacancyId }})
    }
    if(userId) {
      application = await Application.findAll({ where: { userId }})
    }

    return res.json(application);
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

  async change(req, res, next) {
    try {
      const {id, statusId} = req.body;
      console.log(id, statusId)
  
      const application = await Application.findOne({ where: { id } });
      if (!application) {
        return next(ApiError.badRequest('Отклик не найден'));
      }
  
      await application.update({statusId: Number(statusId)});
  
      return res.json(application);
    } catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ApplicationController()