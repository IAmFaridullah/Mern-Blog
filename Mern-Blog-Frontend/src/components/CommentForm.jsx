import { useState , useContext } from 'react';

import './CommentForm.css';

import axios from 'axios';
import moment from 'moment';

import blogContext from '../context/blogContext';

function CommentForm() {
    const [ commentData , setCommentData] = useState({
        name : '',
        email : '',
        comment : '',
        pub_date : '',
    })

    const [ state , dispatch] = useContext(blogContext)
    const blodId = state.activeBlogId;
    
    const inputsHandler = (event) => {
        setCommentData({
            ...commentData, [event.target.name] : event.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const updatedState = {...commentData , blogId : blodId , pub_date :  moment().format('MMMM Do YYYY [at] hh:mm a')};
        axios.post('http://localhost:5000/postNewComment', updatedState)
             .then(response => {
                 dispatch({
                     type : 'CHANGE_STATE',
                 })
             })
             .catch(err => {
                 console.log(err)
             })
       setCommentData({
           name : "",
           email : "",
           comment : ""
       })
    }

    return (
        <div className="comment-form">
            <h2>Add a Comment</h2>
            <form action="#" method="post" onSubmit={submitHandler}>
                <div className="user-info-container">
                    <div className="user-info">
                        <label htmlFor="name">Name</label>
                        <input type="text" onChange={inputsHandler} value={commentData.name} name="name" id="name" />
                    </div>
                    <div className="user-info">
                        <label htmlFor="email">Email</label>
                        <input type="text" onChange={inputsHandler} value={commentData.email} name="email" id="email" />
                    </div>
                </div>
                <div className="commentbox-container">
                    <label htmlFor="comment">Comment</label>
                    <textarea name="comment" onChange={inputsHandler} value={commentData.comment}  id="commentbox" cols="30" rows="10" placeholder="Type your comment here..."></textarea>
                </div>
                <div className="button">
                    <button>Comment</button>
                </div>
            </form>
        </div>
    )
}

export default CommentForm;
