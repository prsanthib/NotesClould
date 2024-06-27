import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, userData }) => {
  useEffect(() => {
    const modalElement = document.getElementById('example');
    const modal = new window.bootstrap.Modal(modalElement);

    if (isOpen) {
      modal.show();
    } else {
      modal.hide();
    }

    const handleHide = () => {
      onClose();
    };

    modalElement.addEventListener('hidden.bs.modal', handleHide);

    return () => {
      modalElement.removeEventListener('hidden.bs.modal', handleHide);
      modal.dispose();
    };
  }, [isOpen, onClose]);

  const style = {
    color: "#AF54FF"
  };

  return (
    <div
      className="modal fade"
      id="example"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              User Information
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {userData ? (
              <div>
                <p>
                  <strong style={style}>Name:</strong>
                  <span style={{ color: "black" }}>{userData.name}</span>
                </p>
                <p>
                  <strong style={style}>Email:</strong>
                  <span style={{ color: "black" }}>{userData.email}</span>
                </p>
                <p>
                  <strong style={style}>Date:</strong>
                  <span style={{ color: "black" }}>
                    {new Date(userData.date).toLocaleString()}
                  </span>
                </p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
