const {Vacancy, Application} = require('../models/models')
const ApiError = require('../errors/ApiError')


class VacancyController {
  async create(req, res, next) {
    try{
      const {title, description, employmentTypeId, specialtyId, districtId, userId} = req.body
      const vacancy = await Vacancy.create({title, description, employmentTypeId, specialtyId, districtId, userId})
  
      return res.json(vacancy)
    } catch (e){
      return next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    let { employmentTypeId, specialtyId, districtId, limit, page } = req.query;
    
    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit;
    let vacancies;

    // Создаем уникальный ключ на основании переданных значений
    const key = `${!!employmentTypeId}-${!!specialtyId}-${!!districtId}`;

    switch (key) {
        case 'false-false-false':
            vacancies = await Vacancy.findAndCountAll({ limit, offset });
            break;

        case 'true-false-false':
            vacancies = await Vacancy.findAndCountAll({ where: { employmentTypeId }, limit, offset });
            break;

        case 'false-true-false':
            vacancies = await Vacancy.findAndCountAll({ where: { specialtyId }, limit, offset });
            break;

        case 'false-false-true':
            vacancies = await Vacancy.findAndCountAll({ where: { districtId }, limit, offset });
            break;

        case 'true-true-false':
            vacancies = await Vacancy.findAndCountAll({ where: { employmentTypeId, specialtyId }, limit, offset });
            break;

        case 'true-false-true':
            vacancies = await Vacancy.findAndCountAll({ where: { employmentTypeId, districtId }, limit, offset });
            break;

        case 'false-true-true':
            vacancies = await Vacancy.findAndCountAll({ where: { specialtyId, districtId }, limit, offset });
            break;

        case 'true-true-true':
            vacancies = await Vacancy.findAndCountAll({ where: { employmentTypeId, districtId, specialtyId }, limit, offset });
            break;

        default:
            console.log('[default case]');
            vacancies = await Vacancy.findAndCountAll({ limit, offset });
            break;
    }
    return res.json(vacancies);
}

  async getOne(req, res) {
    const {id} = req.params
    const vacancyId = id
    const vacancy = await Vacancy.findOne(
      {
        where:{id},
      }
    )
    const applications = await Application.findAll({ where: { vacancyId } });
    return res.json({vacancy, applications})
  }

  async delete(req, res, next) {
    const { id } = req.params; 
    try {
      const vacancy = await Vacancy.findOne({ where: { id } });
      
      if (!vacancy) {
        return res.status(404).json({ message: 'Вакансия не найдена' });
      }
      await Vacancy.destroy({ where: { id } });
      return res.json({ message: 'Вакансия успешно удалена' });
    } catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new VacancyController()