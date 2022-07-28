function getUsers(req, res, next) {
 handleGetUser()
  .then((data) => res.status(200).send(data))
  .catch((err) => res.status(500).send('Internal server error'))
}

async function handleGetUser() {}

module.exports = {
 getUsers
}
