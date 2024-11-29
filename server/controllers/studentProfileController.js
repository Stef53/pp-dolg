// const {StudentProfile} = require('../models/models')
// const ApiError = require('../errors/ApiError')
// const uuid = require('uuid')
// const path = require('path')

// class StudentProfileController {
//   async create(req, res) {
//     const {surname, name, patronimyc, age, gender, userID} = req.body
//     const {img} = req.files
//     let fileName = uuid.v4() + ".jpg"
//     img.mv(path.resolve(__dirname, '..', 'static', 'img', fileName))
//     const studentProfile = await StudentProfile.create({surname, name, patronimyc, age, gender})
//     return res.json({studentProfile})
//   }

//   async getOne(req, res) {
//     const {id} = req.params
//     const studentProfile = await StudentProfile.findOne(
//       {
//         where:{id},
//       }
//     )
//     return res.json(studentProfile)
//   }
// }

// module.exports = new StudentProfileController()