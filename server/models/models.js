const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique:true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const StudentProfile = sequelize.define('studentProfile', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  surname: {type: DataTypes.STRING},
  name: {type: DataTypes.STRING},
  patronimyc: {type: DataTypes.STRING},
  gender: {type: DataTypes.STRING, defaultValue: "MALE"},
  img: {type: DataTypes.STRING}
})

const Application = sequelize.define('application', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  coverLatter: {type: DataTypes.STRING},
})

const Status = sequelize.define('status', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  status: {type: DataTypes.STRING, allowNull: false, unique: true},
})

const Resume = sequelize.define('resume', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  resume: {type: DataTypes.STRING},
})

const Vacancy = sequelize.define('vacancy', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, allowNull: false},
  description: {type: DataTypes.STRING, allowNull: false},
})

const Specialty = sequelize.define('specialty', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false, unique: true},
})

const EmploymentType = sequelize.define('employmentType', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false, unique: true},
})

const StudentApplication = sequelize.define('studentApplication', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


const ApplicationVacancy = sequelize.define('applicationVacancy', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const EmploymentTypeSpecialty = sequelize.define('employmentTypeSpecialty', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(StudentProfile)
StudentProfile.belongsTo(User)

User.hasMany(Application)
Application.belongsTo(User)

StudentProfile.hasMany(StudentApplication)
StudentApplication.belongsTo(StudentProfile)

Application.hasOne(StudentApplication)
StudentApplication.belongsTo(Application)

Application.hasMany(ApplicationVacancy)
ApplicationVacancy.belongsTo(Application)

Application.hasOne(Status)
Status.belongsTo(Application)

Application.hasOne(Resume)
Resume.belongsTo(Application)

Application.hasOne(Vacancy)
Vacancy.belongsTo(Application)

Vacancy.hasOne(Application)
Application.belongsTo(Vacancy)

EmploymentType.hasMany(Vacancy)
Vacancy.belongsTo(EmploymentType)

Specialty.hasMany(Vacancy)
Vacancy.belongsTo(Specialty)

EmploymentType.belongsToMany(Specialty, {through: EmploymentTypeSpecialty})
Specialty.belongsToMany(EmploymentType, {through: EmploymentTypeSpecialty})


User.hasMany(Vacancy)
Vacancy.belongsTo(User)

module.exports = {
  User,
  StudentProfile,
  StudentApplication,
  Application,
  ApplicationVacancy,
  Vacancy,
  EmploymentType,
  Specialty,
  EmploymentTypeSpecialty,
}