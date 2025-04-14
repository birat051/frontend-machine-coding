import { IComments } from "../types";
import Comments from "./Comments";

interface CommentListProps {
  comments: IComments[];
}

function CommentList(props: CommentListProps) {
  const { comments } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Comment</th>
          <th>Posted By</th>
        </tr>
      </thead>
      <tbody>
        {comments.map((data) => (
          <Comments key={data.id} comment={data} />
        ))}
      </tbody>
    </table>
  );
}

export default CommentList;
