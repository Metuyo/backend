var express = require('express');
var router = express.Router();
const User = require('../users/user');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', function(req, res) {
  const fullname = req.body.fullname;
  const email = req.body.email;
  const password = req.body.password;


  const newuser = new User();
  newuser.fullname = fullname;
  newuser.email = email;
  newuser.password = password;

  newuser.save(function (err, savedUser) {

    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send();
  })
})

module.exports = router;
