import { RefObject, useEffect, useRef, useState } from "react";
import { E_TOOLTIP_POSITION } from "../types";

interface ToolTipProps {
  position: E_TOOLTIP_POSITION;
  delay: number;
  parentRef: RefObject<
    | HTMLDivElement
    | HTMLButtonElement
    | HTMLHeadingElement
    | HTMLParagraphElement
  >;
  text: string;
}

function ToolTip(props: ToolTipProps) {
  const { position, delay, parentRef, text } = props;
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [showtoolTip, setShowTooltip] = useState(false);
  useEffect(() => {
    if (showtoolTip) {
      if (!parentRef?.current || !tooltipRef?.current) return;
      const clientBoundary = parentRef?.current?.getBoundingClientRect();
      switch (position) {
        case E_TOOLTIP_POSITION.TOP:
          tooltipRef.current.style.bottom = `${clientBoundary.top - 10}px`;
          tooltipRef.current.style.left = `${
            clientBoundary.left - clientBoundary.width / 2
          }px`;
          break;
        case E_TOOLTIP_POSITION.BOTTOM:
          tooltipRef.current.style.top = `${clientBoundary.bottom + 10}px`;
          tooltipRef.current.style.left = `${
            clientBoundary.left - clientBoundary.width / 2
          }px`;
          break;
        case E_TOOLTIP_POSITION.LEFT:
          tooltipRef.current.style.right = `${
            clientBoundary.left + clientBoundary.width + 10
          }px`;
          tooltipRef.current.style.top = `${
            clientBoundary.top - clientBoundary.height / 2
          }px`;
          break;
        case E_TOOLTIP_POSITION.RIGHT:
          tooltipRef.current.style.left = `${clientBoundary.right + 10}px`;
          tooltipRef.current.style.top = `${
            clientBoundary.top - clientBoundary.height / 2
          }px`;
          break;
      }
    }
  }, [showtoolTip]);
  useEffect(() => {
    const onMouseOver = () => {
      setShowTooltip(true);
    };
    const onMouseAway = () => {
      setTimeout(() => setShowTooltip(false), delay);
    };
    parentRef?.current?.addEventListener("mouseover", onMouseOver);
    parentRef?.current?.addEventListener("mouseout", onMouseAway);
    return () => {
      parentRef?.current?.removeEventListener("mouseover", onMouseOver);
      parentRef?.current?.removeEventListener("mouseout", onMouseAway);
    };
  }, [delay, showtoolTip]);
  if (!showtoolTip) return;
  return (
    <div className="tooltip" ref={tooltipRef}>
      {text}
    </div>
  );
}

export default ToolTip;
