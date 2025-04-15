import { memo } from "react";
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
