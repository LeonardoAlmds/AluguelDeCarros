import './Modal.css';

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          <span>&times;</span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
