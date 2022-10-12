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
          avatarUrl={props.data.author.avatarUrl}
          name={props.data.author.name}
        />

        
      </CommentWrapper>

      <NewWrapper className="words">
        <div className="Comment-text">{props.data.text}</div>
        <CommentDate date={props.data.date} />
      </NewWrapper>
      


    
       
    </div>
  );
}
export default Comment;
