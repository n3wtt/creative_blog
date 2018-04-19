var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var blog = require('../models/blog.js');

/* GET ALL blogS */
router.get('/', function(req, res, next) {
  blog.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE blog BY ID */
router.get('/:id', function(req, res, next) {
  blog.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE blog */
router.post('/', function(req, res, next) {
  blog.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE blog */
router.put('/:id', function(req, res, next) {
  blog.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE blog */
router.delete('/:id', function(req, res, next) {
  blog.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
