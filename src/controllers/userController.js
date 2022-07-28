const userService= require("../services/user.service");

var userController = {
    addUser: addUser,
    findUsers: findUsers,
    findUserById: findUserById,
    updateUser: updateUser,
    deleteById: deleteById
}

function addUser(req, res) {
    let user = req.body;
    userService.create(user).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findUserById(req, res) {
    userService.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    userService.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "User deleted successfully",
                user: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateUser(req, res) {
    userService.updateUser(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "User updated successfully",
                user: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findUsers(req, res) {
    userService.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = userController