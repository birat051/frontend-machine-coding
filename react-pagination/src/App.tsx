import { useEffect, useState } from "react";
import "./App.css";
import { IComments } from "./types";
import { fetchComments } from "./api";
import Comments from "./components/Comments";
import Pagination from "./components/Pagination";
import CommentList from "./components/CommentList";

function App() {
  const [comments, setComments] = useState<IComments[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchCommentData() {
      setLoading(true);
      const data = await fetchComments(page);
      setComments(data);
      setLoading(false);
    }
    fetchCommentData();
  }, [page]);
  if (loading) return <h1>Loading comments...</h1>;
  return (
    <>
      <CommentList comments={comments} />
      <Pagination page={page} setPage={setPage} totalPage={5} />
    </>
  );
}

export default App;
