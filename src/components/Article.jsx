import './Article.css';

function Article(props) {
    return (
        <div className="article-container">
            <div className="article-img">
                <img src={props.image} alt="Article img" />
            </div>
            <div className="article-title">
                <h4>{props.title}</h4>
            </div>
            <div className="article-author">
                <h6>{props.author}</h6>
            </div>
            <div className="article-pub__date">
                <p>{props.pub_date}</p>
            </div>
        </div>
    )
}

export default Article
