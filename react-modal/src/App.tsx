import { useCallback, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);
  const changeModalState = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);
  console.log("Open is: ", open);
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Modal open={open} closeModal={changeModalState}>
        <div
          style={{
            width: "50vw",
            height: "70vh",
            backgroundColor: "white",
            color: "black",
          }}
        >
          <h3>Rendering modal</h3>
        </div>
      </Modal>
      <button onClick={changeModalState}>Show Modal</button>
    </div>
  );
}

export default App;
