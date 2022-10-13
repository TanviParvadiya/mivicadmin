import React from "react";
import { Modal } from "@mui/material";
const DeleteConfirmation = ({
    showModal,
    hideModal,
    confirmModal,
    id,
    message,
}) => {
    return (
        <div show={showModal} onHide={hideModal}>
           
            <Modal.Body>
                <div className="alert alert-danger">{message}</div>
            </Modal.Body>
            <Modal.Footer>
                <a variant="default" onClick={hideModal}>
                    Cancel
                </a>
                <a variant="danger" onClick={() => confirmModal(id)}>
                    Delete
                </a>
            </Modal.Footer>
        </div>
    );
};

export default DeleteConfirmation;
