import { IComments } from "../types";

interface CommentsProps {
  comment: IComments;
}
function Comments(props: CommentsProps) {
  const { comment } = props;
  return (
    <tr>
      <td>{comment.body}</td>
      <td>{comment.name}</td>
    </tr>
  );
}

export default Comments;
