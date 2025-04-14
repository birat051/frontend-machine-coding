import { Dispatch, SetStateAction } from "react";

interface PaginationProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPage: number;
}

function Pagination(props: PaginationProps) {
  const { page, setPage, totalPage } = props;
  return (
    <div className="pagination">
      <button onClick={() => setPage((prev) => --prev)} disabled={page === 1}>
        Prev
      </button>
      <h5>{page}</h5>
      <button
        onClick={() => setPage((prev) => ++prev)}
        disabled={page === totalPage}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
