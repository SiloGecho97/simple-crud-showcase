const User = require('../models').User;
var UserService = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateUser: updateUser
}

function findAll() {
    console.log(User)
    return User.findAll();
}

function findById(id) {
    return User.findByPk(id);
}

function deleteById(id) {
    return User.destroy({ where: { id: id } });
}

function create(User) {
    var newUser = new User(User);
    return newUser.save();
}

function updateUser(User, id) {
    var updateUser = {
        firstName: User.firstName,
        lastName: User.lastName,
    };
    return User.update(updateUser, { where: { id: id } });
}
module.exports = UserService;