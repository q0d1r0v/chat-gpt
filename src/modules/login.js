// imports
const jwt = require("jsonwebtoken");

// users
const getUsers = require("../users/users");

const login = (req, res) => {
  // data
  const { username, password } = req.body;
  const users = getUsers();

  users.map((user) => {
    if (user.username === username && user.password === password) {
      jwt.sign(req.body, process.env.JWT_SECRET_KEY, {}, (err, token) => {
        try {
          if (err) throw err;
          res.send({
            data: {
              token: token,
            },
          });
        } catch (e) {
            res.status(500).send({
                message: "Kirishda xatolik yuz berdi!"
            })
        }
      });
    } else {
      res.status(400).send({
        message: "Foydalanuvchi nomi yoki parol xato kiritildi!",
      });
    }
  });

  console.log(req.body);
  console.log(users);
};

module.exports = login;
