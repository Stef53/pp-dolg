const {StudentProfile, Application} = require('../models/models')
const ApiError = require('../errors/ApiError')
const uuid = require('uuid')
const path = require('path')

class StudentProfileController {
  async create(req, res) {
    const {surname, name, patronimyc, age, gender, userId} = req.body
    const {img} = req.files
    let fileName = uuid.v4() + ".jpg"
    img.mv(path.resolve(__dirname, '..', 'static', 'img', fileName))
    const studentProfile = await StudentProfile.create({surname, name, patronimyc, age, gender})
    return res.json({studentProfile})
  }


  async getOne(req, res, next) {
    try {
      const { id } = req.params
      const userId = id
      const studentProfile = await StudentProfile.findOne({where:{id}})

      return res.json(studentProfile)
    } catch (e) {
      next(ApiError.badRequest("adfasdasd"));
    }
  }

  async change(req, res, next) {
    const { id } = req.params;
    const { surname, name, patronimyc, age, gender, userId } = req.body;

    try {
        const studentProfile = await StudentProfile.findOne({ where: { id } });
        if (!studentProfile) {
            return res.status(404).json({ message: `Профиль студента не найден` });
        }

        await studentProfile.update({
            surname: surname || studentProfile.surname,
            name: name || studentProfile.name,
            patronimyc: patronimyc || studentProfile.patronimyc,
            age: age || studentProfile.age,
            gender: gender || studentProfile.gender
        });

        return res.json(studentProfile);
    } catch (e) {
        next(ApiError.badRequest("Ошибка при обновлении профиля"));
    }
  }
}

module.exports = new StudentProfileController()