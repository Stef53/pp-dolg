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
  surname: {type: DataTypes.STRING, defaultValue: ""},
  name: {type: DataTypes.STRING, defaultValue: ""},
  patronimyc: {type: DataTypes.STRING, defaultValue: ""},
  gender: {type: DataTypes.STRING, defaultValue: ""},
  img: {type: DataTypes.STRING}
})

const Application = sequelize.define('application', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  coverLetter: {type: DataTypes.STRING},
  resume: {type: DataTypes.STRING, allowNull: false}
})

const Status = sequelize.define('status', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false, unique: true},
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

const District = sequelize.define('district', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false, unique: true},
})

const EmploymentTypeSpecialty = sequelize.define('employmentTypeSpecialty', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const EmploymentTypeDistrict = sequelize.define('employmentTypeDistrict', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const DistrictSpecialty = sequelize.define('districtSpecialty', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


User.hasOne(StudentProfile);
StudentProfile.belongsTo(User);

User.hasMany(Vacancy);
Vacancy.belongsTo(User);

User.hasMany(Application);
Application.belongsTo(User);

Application.hasOne(StudentProfile)
StudentProfile.belongsTo(Application)

Status.hasOne(Application);
Application.belongsTo(Status);

Vacancy.hasMany(Application);
Application.belongsTo(Vacancy);

EmploymentType.hasMany(Vacancy);
Vacancy.belongsTo(EmploymentType);

Specialty.hasMany(Vacancy);
Vacancy.belongsTo(Specialty);

District.hasMany(Vacancy)
Vacancy.belongsTo(District)

EmploymentType.belongsToMany(Specialty, { through: EmploymentTypeSpecialty });
Specialty.belongsToMany(EmploymentType, { through: EmploymentTypeSpecialty });

District.belongsToMany(Specialty, { through: DistrictSpecialty });
Specialty.belongsToMany(District, { through: DistrictSpecialty });

EmploymentType.belongsToMany(District, { through: EmploymentTypeDistrict });
District.belongsToMany(EmploymentType, { through: EmploymentTypeDistrict });

module.exports = {
  User,
  StudentProfile,
  Application,
  Vacancy,
  Status,
  EmploymentType,
  Specialty,
  District,
  EmploymentTypeSpecialty,
  DistrictSpecialty,
  EmploymentTypeDistrict
}