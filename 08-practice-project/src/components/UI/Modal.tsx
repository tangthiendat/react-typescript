import { forwardRef, useImperativeHandle, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

export interface ModalHandle {
  open: () => void;
}

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal = forwardRef<ModalHandle, ModalProps>(({ children, onClose }, ref) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current?.showModal();
    },
  }));

  return createPortal(
    <dialog ref={dialog} className="modal" onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
