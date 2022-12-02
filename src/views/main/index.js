import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import * as fileService from '../../services/fileService';
import contactLogo from "../../resources/logo_contac.png";
import { MaterialIcons } from '@expo/vector-icons';

const Main = ({ navigation: { navigate }}) => (
    
    <View style={styles.container}>
        <Text style={styles.entranceText}>Welcome To The Contractor App!</Text>
        <TouchableOpacity 
            style={[styles.buttonContacts, {backgroundColor: "#00BFFF"}]} 
            onPress={ () => navigate("Contacts") }>
            <Image style={styles.contactsImage} source={contactLogo}/>
        </TouchableOpacity>
        <Text style={[styles.contactsTitle, {color:"#00BFFF"}]}>Contacts</Text>
        <TouchableOpacity 
            style={[styles.buttonDelete, {backgroundColor: "#00FFFF"}]} 
            onPress={ () => fileService.cleanDirectory() }>
            <MaterialIcons style={styles.contactsImage} name="delete" size={50} color='#fff' />
        </TouchableOpacity>
        <TouchableOpacity  
            onPress={ () => fileService.importContacts() }>
            <Text>Import</Text>
        </TouchableOpacity>
        <Text style={[styles.contactsTitle, {color: "#00FFFF"}]}>Delete Contacts</Text>
    </View>

);

export default Main