import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Toolbar from "../../components/toolbar";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import AddModal from "../../components/addModal";
import styles from "./styles";
import { SearchBar } from "react-native-elements";
import ContactsList from "../../components/contactsList";
import * as fileService from '../../services/fileService';




const Contacts  = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedContacts, setSelectedContacts] = useState([]); 
    //A boolean flag to indicate wheather the modal to add or edit an contact is open or Not
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [searchString, setSearchString] = useState("");
    
    // A function which selects a contact with long press
    const onContactLongPress = name => {
        if (selectedContacts.indexOf(name) !== -1) {
            //The contact is already within the list
            setSelectedContacts(selectedContacts.filter(contact => contact !== name));
        } else {
            // Add it to the list
            setSelectedContacts([...selectedContacts, name])
        }
    };

    useEffect(() => {
        (async () => {
            const contactsFromFile = await fileService.getAllContacts();
            contactsFromFile.forEach(contact => {
                if (contact.file.includes("\"")) { contact.file = JSON.parse(contact.file) };
                setContacts([...contacts, contact.file]);
                contacts.push(contact.file);
            })
        })();
    }, []); 



    const addContact = async contact => {
        const uuid = uuidv4();
        console.log(uuid)
        contact.id = uuid;
        
        const newContact = await fileService.addContact(contact);
        if (newContact.file.includes("\"")) { newContact.file = JSON.parse(newContact.file) }
        setContacts([...contacts, newContact.file]);

        setIsAddModalOpen(false);
    };


    // A function which deletes a Contact in app
    const removeSelectedContact = async () => {
        const contactsToDelete = contacts.filter(contact => selectedContacts.includes(contact.name));
        await Promise.all(contactsToDelete.map(contact => fileService.remove(contact)));
        setSelectedContacts([]);
        setContacts(contacts.filter(contact => selectedContacts.indexOf(contact.name) === -1));
    };


    // Searchbar function
    useEffect(() => {
        if(searchString.length === 0){
            return
        } else {
          const searchedObjects = []
          contacts.forEach((singleHeroObject, index) => {
            Object.values(singleHeroObject).every((onlyValues, valIndex) => {
              if(onlyValues.toLowerCase().includes(searchString.toLowerCase())){
                searchedObjects.push(singleHeroObject)
                return;
              }
            })
          })
          setContacts(searchedObjects) 
        }
      }, [searchString]) 

    return (
        <View style={styles.container}>
            <Toolbar 
                onAdd={() => setIsAddModalOpen(true)}
                onRemove={() => removeSelectedContact() }
                hasSelectedContacts={selectedContacts.length > 0 }/>
            <SearchBar
                containerStyle={{backgroundColor: 'white', borderColor: "white", borderWidth: 1 }}
                inputStyle={{backgroundColor: 'white'}}
                type="text"
                placeholder=" Search Here..."
                onChange={event => setSearchString(event.nativeEvent.text)}
                value={searchString}
                />
            <Text style={styles.entranceContact}>The Contractor Contacts</Text>
            <ContactsList
                onPress={id => onContactPress(id)} 
                onLongPress={name => onContactLongPress(name)} 
                selectedContacts={selectedContacts}
                contacts={contacts} />
            <AddModal
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}
                addContact={(contact) => addContact(contact)}
                />
        </View>
    )
};

export default Contacts;