import { useState , useContext} from 'react'

import './NewArticle.css';

import { useHistory } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

import blogContext from '../context/blogContext';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {modules , formats} from '../quills-conf';

function NewArticle() {
    const [newBlogData, setNewBlogData] = useState({
        title : "",
        image : "",
        category : "Technology",
        content : "",
        pub_date : ''
    });
    const [, ] = useContext(blogContext);
    const history = useHistory();

    const inputsHandler = (event) => {
        setNewBlogData({...newBlogData, [event.target.name] : event.target.value })
    }

    const selectHandler = (event) => {
        setNewBlogData({...newBlogData, category : event.target.value})
    }

    const contentHandler = (content) => {
        setNewBlogData({...newBlogData, content : content })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const updatedState = {...newBlogData , pub_date :  moment().format('MMMM Do YYYY [at] hh:mm a')};
        axios.post('http://localhost:5000/postNewBlog', updatedState)
             .then((response => {
                 console.log(response);
             }))
             .catch((err) => {
                 console.log(err)
             })
        history.push('/');
    }

    return (
        <div className="new-article-container">
            <h2>CREATE NEW BLOG</h2>
            <form action="#" method="post" onSubmit={submitHandler}>
                <label htmlFor="title">Title</label>
                <input type="text" onChange={inputsHandler} value={newBlogData.title} name="title" />
                <label htmlFor="image">Image</label>
                <input type="url" onChange={inputsHandler} value={newBlogData.image} name="image" />
                <label>Category</label>
                <select value={newBlogData.category || ''} onChange={selectHandler}>
                    <option  value="Technology" >Technology</option>
                    <option  value="Security">Security</option>
                    <option  value="Programming">Programming</option>
                </select>
                <label htmlFor="content">Description</label>
            <ReactQuill theme="snow" modules={modules} name="content" formats={formats} onChange={contentHandler} value={newBlogData.content || ""} className="ql-editor" />
            <button type="submit" >CREATE</button>
            </form>
        </div>
    )
}

export default NewArticle;
