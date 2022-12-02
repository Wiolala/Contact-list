import React from "react";
import { View, FlatList, Text } from "react-native";
import styles from "./styles";
import ContactThumbnail from "../contactThumbnail";

const ContactsList = ({ onLongPress, selectedContacts, contacts, onPress }) => (
    
    <View style={styles.listContainer}>
        <FlatList
            data={contacts.sort((a, b) => a.name.localeCompare(b.name))} // sort contacts alphapedacly
            renderItem={({ item }) => {
                return(
                    <ContactThumbnail
                        contact={item}
                        contactsList={contacts}
                        onPress={onPress}
                        onLongPress={onLongPress} 
                        isSelected={selectedContacts.indexOf(item.name) !== -1}
                        {...item} />
                );
            }}
            keyExtractor={item => item.id} />
    </View>
    
);

export default ContactsList;