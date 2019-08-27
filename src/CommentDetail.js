import React from 'react'
import ApprovalCard  from "./ApprovalCard";
const CommentDetail = props => {
    return(
        <div className="comment">
            <a href="/" className="avatar">
                <img src={props.imageUrl} alt="avatar"/>
            </a>
            <div className="content">
                <a href="/" className="auther">
                    {props.author}
                </a>
                <div className="metadata">
                        <span className="date">
                            {props.timeAgo}
                        </span>
                </div>
                <div className="text">
                    {props.commentText}
                </div>
            </div>
        </div>
    );
};

export default CommentDetail;