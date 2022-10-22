var express = require('express');
var router = express.Router();

const Users = require('../models/users.js');
const Posts = require('../models/posts.js');
const Comments = require('../models/comments.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  Posts.find({})
    .populate('author', 'name')
    .exec(function(err, posts) {
      if (err) {
        return next(err);
      }
      res.json(posts);
    })
});

// GET list of posts
router.get('/posts', function(req, res, next) {

  Posts.find({})
    .populate('author', 'name')
    .exec(function(err, posts) {
      if (err) {
        return next(err);
      }

      res.json(posts);
    })


})

// GET specific post
router.get('/posts/:id', function(req, res, next) {
  Posts.findById(req.params.id)
    .populate('author', 'name')
    .exec(function(err, post) {
      if (err) {
        return next(err);
      }
      res.json(post);
    })
})

// GET update/edit to specific post
router.get('/posts/:id/update', function(req, res, next) {

  Posts.findById(req.params.id)
    .populate('author', 'name')
    .exec(function(err, post) {
      if (err) {
        return next(err);
      }
      res.json(post);
    })
})

// POST update/edit to specific post
// Need to verify that user has permissions (use passport username/password to authenticate, then JWT)

// POST delete specific post
// Need to verify that user has permissions

// GET specific post's comments
router.get('/posts/:id/comments', function(req, res, next) {
  Comments.find({
    post: req.params.id
  })
    .populate('post')
    .exec(function(err, comments) {
      if (err) {
        return next(err);
      }
      res.json(comments);
    })
})

// POST comments on specific post
router.post('/posts/:id/comments', function(req, res, next) {
  Posts.findById(req.params.id)
    // User req.body.<field name> to get comment info, then post to DB
    .exec(function(err, post) {
      if (err) {
        return next(err);
      }
      res.json(post);
    })
})

module.exports = router;
