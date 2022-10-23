var express = require('express');
var router = express.Router();

const Users = require('../models/users.js');
const Posts = require('../models/posts.js');
const Comments = require('../models/comments.js');
const { body, validationResult} = require('express-validator')

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



// POST update/edit to specific post
router.post('/posts/:id/update',
  body("title", "Title must not be empty")
    .trim()
    .isLength({min:1})
    .escape(),
  body("name", "Name must not be empty")
    .trim()
    .isLength({min:1})
    .escape(),
  body("text", "Text must not be empty")
    .trim()
    .isLength({min:1})
    .escape(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
      return;
    }
    const post = new Posts({
      title: req.body.title,
      author: req.body.name,
      text: req.body.text,
      _id: req.params.id
    })


    Posts.findByIdAndUpdate(req.params.id, post, {}, (err, thepost) => {
      if (err) {
        return next(err);
      }
      res.redirect('/');
    })
  }
)

// POST create post
router.post('/posts/create',
  body("title", "Title must not be empty")
  .trim()
  .isLength({min:1})
  .escape(),
  body("name", "Name must not be empty")
  .trim()
  .isLength({min:1})
  .escape(),
  body("text", "Text must not be empty")
  .trim()
  .isLength({min:1})
  .escape(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
      return;
    }
    Users.findOne()
      .exec(function (err, user) {
        const post = new Posts({
          title: req.body.title,
          author: user,
          text: req.body.text
        }).save(err => {
          if (err) {
            return next(err);
          }
          res.redirect('/');
        })
      })

  }
)

// POST update/edit to specific post
// Need to verify that user has permissions (use passport username/password to authenticate, then JWT)


// POST delete specific post
// Need to verify that user has permissions
router.post('/posts/:id/delete', function(req, res, next) {
  res.send('deleted post');
})

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
