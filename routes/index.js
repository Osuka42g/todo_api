var express = require('express');
var router = express.Router();

var todo = require('../controllers/todoController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ping', function(req, res) {
  res.send({pong: "pong"})
})

router.get('/list', todo.list)
router.post('/add', todo.add)
router.put('/complete', todo.complete)

module.exports = router;
