var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({'home': 'home page'});
});

// GET list of posts
router.get('/posts', function(req, res, next) {
  res.json({'posts': 'list of posts'});
})

// GET specific post
router.get('/posts/:id', function(req, res, next) {
  res.json({'post': `post number ${req.params.id}`});
})

// GET specific post's comments
router.get('/posts/:id/comments', function(req, res, next) {
  res.json({'comments': 'list of comments for post ' + req.params.id});
})

module.exports = router;
