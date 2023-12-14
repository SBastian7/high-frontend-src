import React, { useState } from 'react';
import GeneralModal from '../components/organisms/GeneralModal';
const useModal = (initialOptions = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOptions, setModalOptions] = useState({
    isClosable: true,
    hideCloseButton: false,
    action: null,
    ...initialOptions,
  });

  const openModal = (options = {}) => {
    setIsOpen(true);
    setModalOptions({
      ...modalOptions,
      ...options,
    });
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal, Modal: ({ children }) => <GeneralModal isOpen={isOpen} closeModal={closeModal} {...modalOptions}>{children}</GeneralModal> };
};

export default useModal;