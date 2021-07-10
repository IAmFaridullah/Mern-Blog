const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    pub_date : {
        type : String,
    },
    comments : [{
        type : Schema.Types.ObjectId,
        ref : 'Comment'
    }]
})

module.exports = mongoose.model('Blog', blogSchema);