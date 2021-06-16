import './CommentForm.css';

function CommentForm() {

    return (
        <div className="comment-form">
            <h2>Add a Comment</h2>
            <form action="#" method="post">
                <div className="user-info-container">
                    <div className="user-info">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="user-info">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                </div>
                <div className="commentbox-container">
                    <label htmlFor="commentbox">Comment</label>
                    <textarea name="commentbox" id="commentbox" cols="30" rows="10" placeholder="Type your comment here..."></textarea>
                </div>
                <div className="button">
                    <button>Comment</button>
                </div>
            </form>
        </div>
    )
}

export default CommentForm;
