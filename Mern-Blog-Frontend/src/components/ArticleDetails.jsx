import { useContext , useEffect } from 'react'


import './ArticleDetails.css';

import Parser from 'html-react-parser';
// import { useParams } from 'react-router-dom';
import ArticleDetailsSidebar from './ArticleDetailsSidebar';
import CommentForm from './CommentForm';
import Comments from './Comments';
import blogContext from '../context/blogContext';

function ArticleDetails() {

    const [ state , ] = useContext(blogContext);
    const blogId = state.activeBlogId;
    const article = state.blogs.filter(blog => (
        blog._id === blogId
    ))

    useEffect(() => {
        window.scrollTo(0, 0)
    },[blogId])


    return (
        <>
            <div className="article-details">
                <div className="title">
                    <h1>{article[0].title}</h1>
                </div>
                <div className="author-pubdate">
                    <h5>By Faridullah Khan - {article[0].pub_date}</h5>
                </div>
                <div className="article-image">
                    <img src={article[0].image} alt="article-img" />
                </div>
                <div className="description">
                    {Parser(article[0].content)}
                </div>
                <div className="ending">
                    <span><hr /></span>
                    <span>The End</span>
                    <span><hr /></span>
                </div>
                <CommentForm/>
                 <Comments/>
                </div>
            <ArticleDetailsSidebar/>
       </>
    )
}

export default ArticleDetails;
