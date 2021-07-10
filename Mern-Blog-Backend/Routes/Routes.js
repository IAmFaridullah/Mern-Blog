const express = require('express');

const Controllers = require('../Controllers/Controllers');

const router = express.Router();

router.get('/getComments/:blogId', Controllers.getComments);
router.get('/:limit', Controllers.getBlogs);
router.get('/:limit/:category', Controllers.getBlogsByCategory);
router.post('/postNewBlog', Controllers.postNewBlog);
router.post('/postNewComment', Controllers.postNewComment);


module.exports = router;
