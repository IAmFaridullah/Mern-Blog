import './CommentContainer.css';

function CommentContainer(props) {
    return (
        <div className="comment-container">
            <div className="profile-pic">
                <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="profile img" />
            </div>
            <div className="comment-user-info">
                <div className="comment-user-name">
                    <h5>{props.name}</h5>
                </div>
                <h6>{props.date}</h6>
            </div>
            <div className="comment-text">
            {props.comment}
            </div>
        </div>
    )
}

export default CommentContainer;
