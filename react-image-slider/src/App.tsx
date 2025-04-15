import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import { ESLIDER_ACTION_TYPE } from "./types";

function App() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = useMemo(
    () => [
      "https://images.unsplash.com/photo-1506765515384-028b60a970df",
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "https://picsum.photos/id/1018/1000/600",
      "https://picsum.photos/id/1025/1000/600",
      "https://picsum.photos/id/1039/1000/600",
    ],
    []
  );
  const changeActiveImage = useCallback(
    (action: ESLIDER_ACTION_TYPE) => {
      switch (action) {
        case ESLIDER_ACTION_TYPE.NEXT:
          setActiveImageIndex(
            activeImageIndex === images.length - 1 ? 0 : (prev) => ++prev
          );
          break;
        case ESLIDER_ACTION_TYPE.PREV:
          setActiveImageIndex(
            activeImageIndex === 0 ? images.length - 1 : (prev) => --prev
          );
          break;
      }
    },
    [activeImageIndex]
  );

  useEffect(() => {
    let timer: NodeJS.Timeout = setInterval(() => {
      setActiveImageIndex(
        activeImageIndex === images.length - 1 ? 0 : (prev) => ++prev
      );
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImageIndex]);

  return (
    <div className="slider">
      {images.map((value) => (
        <ImageSlider
          activeImage={images[activeImageIndex] || ""}
          image={value}
          changeActiveImage={changeActiveImage}
          key={value}
          activeIndex={activeImageIndex}
          totalImages={images.length}
        />
      ))}
      <div className="slider-carousel">
        {images.map((_, index) => (
          <div
            key={`${index}-circle`}
            style={{
              height: "10px",
              width: "10px",
              backgroundColor: activeImageIndex === index ? "yellow" : "white",
              borderRadius: "50%",
              border: "1px solid black",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
