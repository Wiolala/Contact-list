import React, { useState } from "react";
import { View, Text } from "react-native";
import data from "../../resources/data.json";
import Toolbar from "../../components/toolbarContact";
import ContactInformation from "../../components/contactInformation";
import EditModal from "../../components/editModal";
import styles from "./styles";




const Contact = ({ route }) => {
    
    const [selectedContact, setSelectedContact] = useState([]);
    const contacts = route.params.contactsList;
    const contact = route.params.contact;
    const id = route.params.id;

    // A boolean flag to indicate wheather the modal to edit is open or not
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)

    // A function which modifies the selected list
    const modifySelectedContact = async modifiedcontact  => {
        const modifiedContact = modifiedcontact;
        const oldContact = contact
        if (modifiedContact == undefined) {return};
        selectedContact.push(modifiedContact.name)
        setSelectedContact(selectedContact.filter(contact => contact !== oldContact.name))
        contacts.forEach(contact => {
            if (contact.id === modifiedContact.id) {
                contact.name = modifiedContact.name
                contact.phoneNumber = modifiedContact.phoneNumber
                contact.photo = modifiedContact.photo
                if (!(isNaN(+modifiedContact.id))){
                    contact.id = +modifiedContact.id;
                }
            }
        })
        setIsEditModalOpen(false);
    };

    const contactToBeEdited = () => {
        const editContact = contacts.filter(contact => selectedContact.includes(contact.name))
        return editContact
    };

    const getContact = data.contacts.filter(contact => contact.id == id.id)

    return (
        <View style={styles.container}>
            <Toolbar
                onModify={() => setIsEditModalOpen(true)}
                />
            <Text style={styles.entranceList}>The Contractor Contact</Text>
    	    <ContactInformation
                contact={contact}
                />
            <EditModal
                editContact={(contact) => modifySelectedContact(contact)}
                isOpen={isEditModalOpen}
                closeModal={() => setIsEditModalOpen(false)}
                selectedContact={contact}
                />
        </View>
    )


};

export default Contact
