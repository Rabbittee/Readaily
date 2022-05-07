import { createContext, useContext, useState } from 'react';

export const ModalContext = createContext();
export const useModalContext = () => useContext(ModalContext);

export function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const value = { showModal, setShowModal, toggleModal };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}
