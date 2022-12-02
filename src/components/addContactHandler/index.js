import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import AddPhotoModal from "../addModalPhoto";
import * as imageService from "../../services/imageService";


const ContactInputHandler = ({ addContact }) => {
    const [isAddPhotoModalOpen, setIsAddPhotoModalOpen ] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        phoneNumber: "",
        thumbnailPhoto: ""
    });

    const inputHandler = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const takePhoto = async () => {
        const photo = await imageService.takePhoto();
        console.log(photo);
    };

    return (
        <View>
            <Text style={styles.titleNewContact}>Create A New Contact</Text>
            <TextInput 
                style={styles.inputContactText}
                placeholder="🖊️ Enter Contact Name"
                value={inputs.name}
                onChangeText={text => inputHandler("name", text)} />
            <TextInput
                style={styles.inputContactText}
                placeholder="🖊️ Enter A Phonenumber"
                value={inputs.phoneNumber}
                onChangeText={text => inputHandler("phoneNumber", text)} />
            <TouchableOpacity
                    onPress={() => setIsAddPhotoModalOpen(true)}
                    value={inputs.thumbnailPhoto}>
                    <Text style = {styles.modalText}> 📸 Upload An Image </Text>
            </TouchableOpacity>
            <Text style={styles.tileCancelText}>Swipe UP/DOWN To Cancel</Text>
            <View style={styles.buttons}>
                <TouchableOpacity
                    onPress={() => addContact(inputs)}>
                    <Text> Submit </Text>
                </TouchableOpacity>
            </View>
            <AddPhotoModal
                isOpen={isAddPhotoModalOpen}
                closeModal={() =>setIsAddPhotoModalOpen(false)}
                takePhoto={() => takePhoto()}
                selectFromCameraRoll={() => { }}
            />  
        </View>
    )
};

export default ContactInputHandler