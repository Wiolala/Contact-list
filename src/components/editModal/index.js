import React from "react";
import Modal from "../modal"
import EditContact from "../editContactHandler";

const EditModal = ({
    isOpen,
    closeModal,
    editContact,
    selectedContact
}) => (
    <Modal
        isOpen={isOpen}
        closeModal={closeModal}>
        <EditContact
            editContact={editContact}
            selectedContact={selectedContact}
            />
    </Modal>
);

export default EditModal;