import { memo, useEffect } from "react";

interface DialogBoxProps {
  onConfirm: () => void;
  heading: string;
  content: string;
  onCancel: () => void;
}

function DialogBox(props: DialogBoxProps) {
  const { onConfirm, heading, content, onCancel } = props;
  useEffect(() => {
    const keyBoardEvent = (e: KeyboardEvent) => {
      e.preventDefault();
      switch (e.key) {
        case "Escape":
          onCancel();
          break;
      }
    };
    window.addEventListener("keydown", keyBoardEvent);
    return () => window.removeEventListener("keydown", keyBoardEvent);
  }, []);
  return (
    <div className="dialog-box-modal">
      <div className="dialog-box">
        <h3>{heading}</h3>
        <p>{content}</p>
        <div>
          <button onClick={onCancel} className="cancel">
            Cancel
          </button>
          <button onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default memo(DialogBox);
