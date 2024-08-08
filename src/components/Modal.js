import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll'); // Clean up on component unmount
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <img src={`${process.env.PUBLIC_URL}/images/close-icon.png`} alt="닫기" className="close-icon" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;