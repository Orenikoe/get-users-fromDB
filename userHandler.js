const database = require("./database");
let user;
const getUsers = (req, res) => {
  database
    .query("select * from users")
    .then(([users]) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};
const getUsersById =  (req, res) => {
  database
    .query("select * from users")
    .then(([users]) => {
       user = users.find((oneUser) => oneUser.id === parseInt(req.params.id))
      if(user) {
         res.status(200).send(user)
      } else {
        res.status(500).send('Not found!')
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};
getUsersById



module.exports = {
  getUsers,
  getUsersById
  
};
