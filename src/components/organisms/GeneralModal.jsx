import React from 'react';
import Button from '../atoms/Button';
import useIsMobile from '../../hooks/useIsMobile';

const GeneralModal = ({ isOpen, closeModal, isClosable, hideCloseButton, action, size, title, ...otherProps }) => {
    const getSizeClass = (size) => {
        const sizeClass = {
            sm: 'sm:w-64',
            md: 'md:w-96',
            lg: 'lg:w-2/3',
            full: 'w-full'
        };
        return sizeClass[size] || '';
    };

    const isMobile = useIsMobile();

    return (
        <>
          {isOpen && (
            <div
              className="fixed inset-0 z-50 overflow-auto flex items-center justify-center text-gray-800"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              onClick={(e) => {
                if (isClosable && e.target === e.currentTarget) {
                  closeModal();
                }
              }}
            >
              <div className={`bg-white p-4 max-w-screen-md mx-4 mx-md-auto flex flex-col justify-center text-center gap-5 ${getSizeClass(isMobile ? 'full' : size)}`}>
                {!hideCloseButton && isClosable && (
                  <button className="m-4" onClick={closeModal}>
                    &times;
                  </button>
                )}
                {title && (
                    <div className="font-bold text-2xl title">
                        {title}
                    </div>
                )}
                {/* Other modal content */}
                <div className="text-lg" {...otherProps}>{/* Additional modal content */}</div>
                {action && (
                    <Button label={action.label} onClick={action.onClick} className="w-2/6 mx-auto mt-3" />
                )}
              </div>
            </div>
          )}
        </>
      );
};

export default GeneralModal;
