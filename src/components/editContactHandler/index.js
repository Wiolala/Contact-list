import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

const EditContact = ({ selectedContact, editContact }) => {

    const [inputs, setInputs] = useState({
        name: selectedContact.name,
        id: selectedContact.id,
        phoneNumber: selectedContact.phoneNumber,
        thumbnailPhoto: selectedContact.thumbnailPhoto,
    });

    const inputHandler = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    return (
        <View>
            <Text style={styles.titleEditContact}>Edit Contact</Text>
            <TextInput
                style={styles.inputContactText}
                placeholder={selectedContact.name}
                value={inputs.name}
                onChangeText={text => inputHandler("name", text)} />
            <TextInput
                style={styles.inputContactText}
                placeholder={selectedContact.phoneNumber}
                value={inputs.phoneNumber}
                onChangeText={text => inputHandler("phoneNumber", text)} />
            <TextInput
                style={styles.inputContactText}
                placeholder={selectedContact.thumbnailPhoto}
                value={inputs.thumbnailPhoto}
                onChangeText={text => inputHandler("thumbnailPhoto", text)} />
            <Text style={styles.tileCancelText}>Swipe UP/DOWN To Cancel</Text>
            <View style={styles.buttons}>
                <TouchableOpacity
                    onPress={() => editContact(inputs)}>
                    <Text> Submit </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default EditContact