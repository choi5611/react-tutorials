import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:" 홍길동",
        comment:"안녕하세요. 홍길동입니다."
    },
    {
        name:" 김서방",
        comment:"안녕하세요. 김서방입니다."
    },
    {
        name:" 김누렁",
        comment:"안녕하세요. 김누렁입니다."
    },
];
function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return(
                    <Comment name={comment.name} comment={comment.comment} />        
                );
            })}
        </div>
    );
}
export default CommentList