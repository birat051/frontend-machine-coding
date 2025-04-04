import { ReactNode, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: ReactNode;
  open: boolean;
  closeModal: () => void;
}

function Modal(props: ModalProps) {
  const { children, open, closeModal } = props;
  const modalRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onModalClick = (e: MouseEvent) => {
      if (
        modalRef?.current &&
        childrenRef?.current &&
        e.target instanceof Node &&
        !childrenRef.current.contains(e.target) &&
        modalRef.current.contains(e.target)
      )
        closeModal();
    };
    window.addEventListener("click", onModalClick);
    return () => window.removeEventListener("click", onModalClick);
  }, []);
  if (!open) return null;
  return ReactDOM.createPortal(
    <div className="modal" ref={modalRef}>
      <div ref={childrenRef}>{children}</div>
    </div>,
    document.body
  );
}

export default Modal;
