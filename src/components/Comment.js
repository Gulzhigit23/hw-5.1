import "./Comment.css";
import CommentDate from "./CommentDate";
import CommentUserInfo from "./CommentUserInfo";
import CommentWrapper from "./CommentWrapper";
import NewWrapper from "./NewWrapper";

function Comment(props) {
  return (
    <div className="Comment" >
      <CommentWrapper className="comment-first">
        <CommentUserInfo
          avatarUrl={props.author.avatarUrl}
          name={props.author.name}
        />

        
      </CommentWrapper>

      <NewWrapper className="words">
        <div className="Comment-text">{props.text}</div>
        <CommentDate date={props.date} />
      </NewWrapper>
      


    
       
    </div>
  );
}
export default Comment;
