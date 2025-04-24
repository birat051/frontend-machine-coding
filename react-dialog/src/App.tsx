import { useCallback, useState } from "react";
import "./App.css";
import DialogBox from "./components/DialogBox";

function App() {
  const [count, setCount] = useState(0);
  const [showDialog, setShowDialog] = useState(false);

  const toggleDialogBox = useCallback(() => {
    setShowDialog((prev) => !prev);
  }, []);

  const onConfirm = useCallback(() => {
    setCount((prev) => ++prev);
    toggleDialogBox();
  }, [toggleDialogBox]);

  return (
    <div className="app">
      <h1>{count}</h1>
      <button onClick={toggleDialogBox}>Increase Count</button>
      {showDialog && (
        <DialogBox
          content={"Are you sure you want to increase count"}
          heading="Increase count confirmation"
          onCancel={toggleDialogBox}
          onConfirm={onConfirm}
        />
      )}
    </div>
  );
}

export default App;
