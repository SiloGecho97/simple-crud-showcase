const User = require('../models').User
var UserService = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  updateUser: updateUser,
}

function findAll() {
  return User.findAll()
}

function findById(id) {
  return User.findByPk(id)
}

function deleteById(id) {
  return User.destroy({ where: { id: id } })
}

function create(user) {
  return User.create(user)
}

function updateUser(user, id) {
  var updateUser = {
    firstName: user.firstName,
    lastName: user.lastName,
  }
  return User.update(updateUser, { where: { id: id } })
}
module.exports = UserService
