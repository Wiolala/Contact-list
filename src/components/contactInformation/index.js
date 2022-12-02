import React from "react";
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const ContactInformation = ({ contact }) => {
    const { navigate } = useNavigation();
    return(
        <View style={styles.containor}>
            <View>
                <View>
                    <View style={styles.skyContainer}></View>
                    <View style={styles.imageContainer}>
                        { contact.thumbnailPhoto.length <= 0
                            ?
                            <View style={styles.placeholder}>
                                <Text style={styles.imageText}>{contact.name[0]}</Text>
                            </View>
                            : 
                            <Image
                                id="preview" 
                                style={styles.image}
                                resizeMode="cover"
                                source={{ uri :contact.thumbnailPhoto }}/>
                        }
                        <Text style={styles.name}>{contact.name}</Text>
                    </View>
                    <View>
                        <View style={styles.phoneNumberConteinor}>
                            <Text style={styles.phoneText}>Phone Number:</Text>
                            <Text style={styles.phoneNumber}>{contact.phoneNumber}</Text>
                        </View>
                        <View>
                            <View>
                                <View style={styles.phoneCallContainer}>
                                    <TouchableOpacity
                                        onPress={() => navigate("PhoneCall", { contact })}>
                                        <View style={styles.placeholderPhoneCall}>
                                            <AntDesign name="phone" size={40} color="black" />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )}

export default ContactInformation