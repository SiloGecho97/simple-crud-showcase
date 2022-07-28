const User = require('../models/User');
var User = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateUser: updateUser
}

function findAll() {
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
        title: User.title,
        technologies: User.technologies,
        description: User.description,
        budget: User.budget,
        contact_email: User.contact_email
    };
    return User.update(updateUser, { where: { id: id } });
}
module.exports = User;