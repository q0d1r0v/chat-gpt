// imports
const jwt = require("jsonwebtoken");
const getUsers = require("../users/users");

const middleware = async (req, res, next) => {
  const token = req.headers?.authorization?.split("Bearer ")[1] || 0
  const users = getUsers();

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, data) => {
      try {
        if (err) throw err;

        users.map((user) => {
          if (user.username === data.username && user.password === data.password) {
            next();
          } else {
            res.status(401).send({
              message: "Unauthorized",
            });
          }
        });
      } catch (e) {
        res.status(500).send({
          message: "Faol bolmagan kalit kiritildi!",
        });
      }
    });
  } else {
    res.status(401).send({
      message: "Unauthorized",
    });
  }
};

module.exports = middleware;
