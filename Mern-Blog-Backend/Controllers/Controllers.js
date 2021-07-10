const Blog = require('../Models/Blog');
const Comment = require('../Models/Comment');

exports.getBlogs = (req, res, next ) => {
        const limit = parseInt(req.params.limit)
        Blog.find().sort({ _id  : -1}).limit(limit)
            .then((blogs) => {
            res.json({
                message : 'Blogs Fetched!',
                blogs : blogs
            })
        }).catch((err) => {
            console.log(err)
        })
}

exports.getBlogsByCategory = (req, res, next ) => {
    Blog.find({category : req.params.category}).then((blogs) => {
        res.json({
            message : 'Blogs Fetched!',
            blogs : blogs
        })
    }).catch((err) => {
        console.log(err)
    })
}

exports.postNewBlog = (req, res, next) => {
    const blog = new Blog(req.body);
          blog.save().then((blog) => {
            res.json({
                message : 'Blog Created!',
                blog : blog
            })
          }).catch((err) => {
              console.log(err)
          })
}

exports.getComments = (req, res, next ) => {
    const blogId = req.params.blogId;
    Blog.findById(blogId).populate('comments', 'name comment pub_date', null, { sort: { '_id': -1 } })
        .then(blog => {
            if(blog){
                res.json({
                    message : 'Comments Fetched!',
                    comments : blog.comments
                })
            }else{
                console.log('Blog not found!');
            }
        })
        .catch((err) => {
            console.log(err)
        })  
}

exports.postNewComment = (req, res, next) => {
    Blog.findById(req.body.blogId)
        .then(blog => {
            if(blog){
                const comment = new Comment({
                    name : req.body.name,
                    email : req.body.email,
                    comment : req.body.comment,
                    pub_date : req.body.pub_date,
                    blog : req.body.blogId
                });
                      comment.save().then((comment) => {
                        blog.comments.push(comment);
                        blog.save()
                            .then(() => {
                            res.json({
                                message : 'Comment Posted!',
                                comment : comment
                            })
                        })
                            .catch(err => {
                                console.log(err)
                            })
                       
                      }).catch((err) => {
                          console.log(err)
                      })
            }else{
                console.log('Blog not found!')
            }
        })
        .catch(err => {
            console.log(err)
        })
  
}


