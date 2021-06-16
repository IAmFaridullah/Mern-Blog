import './ArticleDetailsBody.css';

function ArticleDetailsBody(props) {
    return (
        <div className="article-details-body">
            {props.children}
        </div>
    )
}

export default ArticleDetailsBody;
