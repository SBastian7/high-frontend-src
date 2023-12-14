'use client'
import React from 'react'
import useModal from '../hooks/useModal';
import { useEffect } from 'react';
function Home() {
  const { isOpen, openModal, closeModal, Modal } = useModal({
    isClosable: false,
    hideCloseButton: false,
    size: 'lg',
    title: 'Validación de edad',
    action: { 
      label: 'Soy mayor de edad', 
      onClick: () => {
        localStorage.setItem('ageValidated', true);
        closeModal();
      } 
    },
  });

  useEffect(() => {
    const ageValidation = localStorage.getItem('ageValidated');
    !ageValidation && openModal()
  }, [])


  return (
    <div>
      <Modal>
        <p>
          Para continuar navegando en esta página <br/> debes ser mayor de 18 años.
        </p>
      </Modal>
    </div>
  )
}

export default Home;