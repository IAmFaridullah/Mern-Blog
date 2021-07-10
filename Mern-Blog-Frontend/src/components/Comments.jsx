import { useEffect, useContext } from 'react'

import './Comments.css';

import axios from 'axios';

import blogContext from '../context/blogContext';
import CommentContainer from './CommentContainer';


function Comments() {
    const [ state , dispatch ] = useContext(blogContext);
    const blogId = state.activeBlogId;

useEffect(() => {
    axios.get(`http://localhost:5000/getComments/${blogId}`)
        .then(response => {
          dispatch({
           type : 'SET_COMMENTS',
           payload : response.data.comments
         })
        })
        .catch(err => {
          console.log(err)
        })
}, [state.updated])// eslint-disable-line react-hooks/exhaustive-deps


     return (
         <div>
             <div className="article-comments-container">
                    <h2>Comments ({state.comments.length})</h2>
                    {state.comments.map(user => (
                        <CommentContainer
                        key={user._id}
                        name={user.name}
                        date={user.pub_date}
                        comment={user.comment}
                        />
                    ))}
                </div>
            </div>
     )
 }
 
 export default Comments;
 