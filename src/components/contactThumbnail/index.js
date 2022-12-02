import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const ContactThumbnail = ({ name, id, phoneNumber, thumbnailPhoto, onLongPress, isSelected, openPress, contact, contactsList}) => {
    const { navigate } = useNavigation();
    if (thumbnailPhoto === undefined) { thumbnailPhoto = "" }
    return (
        <TouchableOpacity
            onPress={() => navigate("Contact", { contact, id, contactsList })}
            onLongPress={() => onLongPress(name)}>
            {   
                isSelected
                ?
                <AntDesign name="checkcircleo" style={styles.checkmark} />
                :
                <></>
            }
            <View style={[styles.contactContainor, {opacity: isSelected ? .5 : 1 }]}>
                <View style={styles.imgCon}>
                    { thumbnailPhoto.length <= 0
                        ?
                        <View style={styles.placeholder}>
                            <Text style={styles.imageText}>{name[0]}</Text>
                        </View>
                        : 
                        <Image
                            id="preview" 
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri :thumbnailPhoto }}/>
                    }          
                </View>
                <View style={styles.contactData}>
                    <Text style={styles.name}>{name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};
export default ContactThumbnail;