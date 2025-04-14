import { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (progress >= 100) return;
    const timer = setTimeout(() => {
      setProgress((prev) => prev + 10);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [progress]);
  return (
    <>
      <ProgressBar progress={progress} />
    </>
  );
}

export default App;
