import { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  const trafficLights = useMemo(() => ["red", "yellow", "green"], []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      switch (activeIndex) {
        case 0:
          setActiveIndex((prev) => ++prev);
          break;
        case 1:
          setActiveIndex((prev) =>
            prevIndex === trafficLights.length - 1 ? 0 : ++prev
          );
          break;
        case 2:
          setActiveIndex(1);
      }
      setPrevIndex(activeIndex);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [activeIndex, prevIndex]);
  return (
    <div className="app">
      <div className="traffic-box">
        {trafficLights.map((value, index) => (
          <div
            style={{ backgroundColor: index === activeIndex ? value : "grey" }}
            key={value}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
