import React from 'react';

const Post = (props) => {
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{props.post.id} {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post_btns">
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    );
};

export default Post;