const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    comment : {
        type : String,
        required : true
    },
    pub_date : {
        type : String,
    },
    blog : {
        type : Schema.Types.ObjectId,
        ref : 'Blog'
    }
    })

module.exports = mongoose.model('Comment', commentSchema);