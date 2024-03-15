import "./Modal.scss";

function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    X
                </button>
                <h2>Employee Created!</h2>
                <p>Your new employee has been successfully added.</p>
            </div>
        </div>
    );
}

export default Modal;
