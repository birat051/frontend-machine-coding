import { useEffect, useState } from "react";
import "./App.css";
import { I_Character } from "./types";
import { fetchUsers } from "./api";
import CharacterDataTable from "./components/CharacterDataTable";

function App() {
  const [page, setPage] = useState(1);
  const [characterData, setData] = useState<I_Character[]>([]);
  const [totalPage, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchBaseInfo() {
      try {
        setLoading(true);
        const res = await fetchUsers(page);
        setData(res.results);
        setTotalPages(res.count);
      } catch (e) {
        console.error("Unexpected error occured whule fetching data:", e);
      } finally {
        setLoading(false);
      }
    }
    fetchBaseInfo();
  }, [page]);
  if (loading) return <h1>Loading Data...</h1>;
  return (
    <>
      {characterData && <CharacterDataTable characters={characterData} />}
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <button onClick={() => setPage((prev) => --prev)} disabled={page === 1}>
          Prev
        </button>
        <h3>{page}</h3>
        <button
          onClick={() => setPage((prev) => ++prev)}
          disabled={totalPage === page}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;
