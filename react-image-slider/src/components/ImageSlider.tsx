import { memo, useRef } from "react";
import { ESLIDER_ACTION_TYPE } from "../types";

interface ImageSliderProps {
  image: string;
  changeActiveImage: (value: ESLIDER_ACTION_TYPE) => void;
  activeImage: string;
  totalImages: number;
  activeIndex: number;
}

function ImageSlider(props: ImageSliderProps) {
  const { image, changeActiveImage, activeImage } = props;
  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
    touchStartRef.current = e.touches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
    touchEndRef.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    if (!touchStartRef?.current) return;
    if (!touchEndRef?.current) return;
    const diff = touchStartRef?.current - touchEndRef?.current;
    console.log("Diff: ", diff);
    if (diff < -50) {
      changeActiveImage(ESLIDER_ACTION_TYPE.PREV);
    } else if (diff > 50) {
      changeActiveImage(ESLIDER_ACTION_TYPE.NEXT);
    }
  };
  if (image !== activeImage) return null;
  return (
    <>
      <button
        className="prev"
        onClick={() => changeActiveImage(ESLIDER_ACTION_TYPE.PREV)}
      >
        Prev
      </button>
      <img
        src={image}
        alt={`alternateImage-${image}`}
        className="image-slider"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      />
      <button
        className="next"
        onClick={() => changeActiveImage(ESLIDER_ACTION_TYPE.NEXT)}
      >
        Next
      </button>
    </>
  );
}

export default memo(ImageSlider);
