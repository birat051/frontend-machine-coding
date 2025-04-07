import { Fragment, RefObject, useMemo, useRef } from "react";
import "./App.css";
import ToolTip from "./components/ToolTip";
import { E_TOOLTIP_POSITION } from "./types";

function App() {
  const parentBottomRef = useRef<HTMLButtonElement>(null);
  const parentTopRef = useRef<HTMLButtonElement>(null);
  const parentLeftRef = useRef<HTMLButtonElement>(null);
  const parentRightRef = useRef<HTMLButtonElement>(null);

  const showToolTips = useMemo(
    () => [
      {
        text: "ToolTip Bottom",
        reference: parentBottomRef,
        position: E_TOOLTIP_POSITION.BOTTOM,
      },
      {
        text: "ToolTip Top",
        reference: parentTopRef,
        position: E_TOOLTIP_POSITION.TOP,
      },
      {
        text: "ToolTip Left",
        reference: parentLeftRef,
        position: E_TOOLTIP_POSITION.LEFT,
      },
      {
        text: "ToolTip Right",
        reference: parentRightRef,
        position: E_TOOLTIP_POSITION.RIGHT,
      },
    ],
    []
  );
  return (
    <div className="parent-container">
      {showToolTips.map((value) => {
        return (
          <Fragment key={value.position}>
            <button
              ref={value.reference}
              style={{
                cursor: "pointer",
                border: "1px solid black",
                // padding: "0.5rem",
              }}
            >
              {value.text}
            </button>
            <ToolTip
              parentRef={value.reference as RefObject<HTMLButtonElement>}
              position={value.position}
              text={value.text}
              delay={300}
            />
          </Fragment>
        );
      })}
    </div>
  );
}

export default App;
