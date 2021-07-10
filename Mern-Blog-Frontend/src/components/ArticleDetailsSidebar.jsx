import { useContext , useEffect } from 'react';

import './ArticleDetailsSidebar.css';

import { SocialIcon } from 'react-social-icons'
import axios from 'axios';
import { Link } from 'react-router-dom';
import slug from 'slug';
import * as uuid from 'uuid';

import Article from './Article';
import blogContext from '../context/blogContext';


const ArticleDetailsSidebar = () => {

    const [ state , dispatch ] = useContext(blogContext);

    useEffect(() => {
            axios.get('http://localhost:5000/6/')
                 .then(response => {
                        dispatch({
                            type : 'SET_SIDEBAR_BLOGS',
                            payload : response.data.blogs
                          })
                 })
                 .catch(err => {
                   console.log(err)
                 })
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    const sideBarArticles = state.sideBarBlogs.filter(blog => (
        blog._id !== state.activeBlogId
    ))
     return (
        <div className="sidebar">
                <div className="social-icons">
                    <h2>Follow Us On Social Media</h2>
                    <div className="sidebar-social-icons">
                        <SocialIcon url="https://www.facebook.com/IAmFaridullah" fgColor="white" style={{ height: 37, width: 37}} />
                        <SocialIcon url="https://www.instagram.com/iam_faridullah/" fgColor="white" style={{ height: 37, width: 37}} />
                        <SocialIcon url="https://www.twitter.com/iam_faridullah" fgColor="white" style={{ height: 37, width: 37}} />
                        <SocialIcon url="https://www.youtube.com" fgColor="white" style={{ height: 37, width: 37}} />
                    </div>
                </div>
                <div className="recent-posts-title">
                    <h3>Recent Posts</h3>
                    <div className="recent-posts">
                    {sideBarArticles.map(blog => {
                     const slugified_title = slug(blog.title);
               return (
                <div className="recent-post"  
                    key={uuid.v4()}
                    onClick={() => {
                    dispatch({
                        type : 'SET_BLOGID',
                        payload : blog._id
                    })
                    dispatch({
                        type : 'CHANGE_STATE',
                        payload : blog._id
                        })
                    }} >
                <Link to={`/article-detail/${slugified_title}`} style={{ color : "black", textDecoration : "none"}}>
                <Article 
                key={blog._id}
                title={blog.title}
                image={blog.image}
                content={blog.content}
                author='By Faridullah Khan'
                pub_date={blog.pub_date}
                />
            </Link>
            </div>
               )
            }
            )}                 
                    </div>
                </div>
            </div>
    )

}

export default ArticleDetailsSidebar;