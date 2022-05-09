import { createPortal } from 'react-dom';
import clsx from 'clsx';
import Icon from './Icon';
import { useModalContext } from './ModalElement';

export const Modal = ({ children }) => {
  const { toggleModal, showModal } = useModalContext();

  if (!showModal) return null;

  //use createPortal can render in custom div not in root
  return createPortal(
    <div
      className={clsx(
        'fixed top-0 right-0 z-10',
        'flex',
        'h-screen w-full',
        'bg-black bg-opacity-90',
        showModal && 'animate-fadeIn'
      )}
    >
      <button className="fixed top-11 right-11 w-8" onClick={toggleModal}>
        <span className="text-white">
          <Icon.Close />
        </span>
      </button>
      <div className="flex h-full w-full items-center justify-center">{children}</div>
    </div>,

    document.getElementById('modal')
  );
};
