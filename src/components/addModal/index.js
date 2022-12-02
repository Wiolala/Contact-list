import React from "react";
import Modal from "../modal"
import ContactInputHandler from "../addContactHandler";

const AddModal = ({
    isOpen,
    closeModal,
    addContact
}) => (
    <Modal
        isOpen={isOpen}
        closeModal={closeModal}>
        <ContactInputHandler 
            addContact={addContact}/>
    </Modal>
);

export default AddModal;