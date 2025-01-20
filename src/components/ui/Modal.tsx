import { useEffect, useCallback, useRef, MutableRefObject } from 'react';

interface IModalProps {
  show?: boolean;
  closeModal?: () => void;
  children: JSX.Element | JSX.Element[] | string;
}

const Modal = ({ show = true, children, closeModal }: IModalProps) => {
  const modalRef: MutableRefObject<null | HTMLDivElement> = useRef(null);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Escape' && closeModal) {
        closeModal();
      }
    },
    [closeModal],
  );

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (!modalRef.current?.contains(event.target as HTMLDivElement)) {
        if (closeModal) closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeModal]);
  useEffect(() => {
    const handleKeyDownEvent = (event: KeyboardEvent) => {
      handleKeyDown(event as unknown as React.KeyboardEvent);
    };

    document.addEventListener('keydown', handleKeyDownEvent);

    return () => {
      document.removeEventListener('keydown', handleKeyDownEvent);
    };
  }, [handleKeyDown]);

  return (
    <>
      <div
        className="modal fade show"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: show ? 'block' : 'none' }}
      >
        <div className="modal-dialog modal-dialog-centered" ref={modalRef}>
          <div className="modal-content">{children}</div>
        </div>
      </div>
      <div style={{ display: show ? 'block' : 'none' }} className="modal-backdrop fade show"></div>
    </>
  );
};

export default Modal;
