import { useContext, useEffect, } from 'react'

import './ArticlesContainer.css';

import { Link } from 'react-router-dom';
import axios from 'axios';
import slug from 'slug';
import * as uuid from 'uuid';

import Article from './Article';
import blogContext from '../context/blogContext';


function ArticlesContainer(props) {
    const [ state , dispatch ] = useContext(blogContext);

    const category = props.category;
    const hasCategory = category ? category : '';
 
    useEffect(() => {
            axios.get(`http://localhost:5000/6/${hasCategory}`)
                 .then(response => {
                        dispatch({
                            type : 'SET_BLOGS',
                            payload : response.data.blogs
                          })
                 })
                 .catch(err => {
                   console.log(err)
                 })
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="articles-container">
            {state.blogs.map(blog => {
                const slugified_title = slug(blog.title);
               return (
                <Link to={`/article-detail/${slugified_title}`} 
                key={uuid.v4()}
                onClick={() => {
                    dispatch({
                        type : 'SET_BLOGID',
                        payload : blog._id
                        })
                    }} 
                style={{ color : "black", textDecoration : "none"}}>
                <Article 
                title={blog.title}
                image={blog.image}
                content={blog.content}
                author='By Faridullah Khan'
                pub_date={blog.pub_date}
                />
            </Link>
               )
            }
            )}
        </div>
    )
}

export default ArticlesContainer
