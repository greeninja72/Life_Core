var express = require("express");
var User = require("../models").User;

var router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/", function(req, res, next) {
  User.create({
    pid: req.body.pid,
    water: req.body.water,
    filter: req.body.filter,
    notify: req.body.notify
  })
    .then(result => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch(err => {
      console.error(err);
      next(err);
    });
});

router.post("/:pid", async (req, res, next) => {
  try {
    const users = await User.findAll({
      attribute: [
        {
          id: req.body.id,
          pid: req.body.pid,
          water: req.body.water,
          notify: req.body.notify
        }
      ],
      where: {
        pid: req.params.pid
      }
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch("/:pid", function(req, res, next) {
  User.update(
    {
      water: req.body.water,
      filter: req.body.filter,
      notify: req.body.notify
    },
    {
      where: {
        pid: req.params.pid
      }
    }
  )
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.error(err);
      next(err);
    });
});

module.exports = router;
