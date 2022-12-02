import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import call from "react-native-phone-call";
import { AntDesign } from '@expo/vector-icons';


const PhoneCall = ({ route }) => {
    const contact = route.params.contact;

    const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber);


    
  const triggerCall = () => {
    // Check for perfect 10 digit length
    if (phoneNumber.length != 7) {
      alert('Please insert correct contact number');
      return;
    }

    const args = {
      number: phoneNumber,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  };


    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.titleText}>
            Call Now
          </Text>
          <Text style={styles.titleTextsmall}>
            Is The Right Phone Number? Changes If Not.
          </Text>
          <TextInput
            value={phoneNumber}
            onChangeText={
              (phoneNumber) => setPhoneNumber(phoneNumber)
            }
            placeholder={'Enter Conatct Number to Call'}
            keyboardType="numeric"
            style={styles.textInput}
          />
          <View>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={triggerCall}
                style={styles.phoneCallContainer}>
                <View style={styles.placeholderPhoneCall}>
                    <AntDesign name="phone" size={25} color="black" />
                </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };

export default PhoneCall


///  https://aboutreact.com/example-to-make-a-call-from-the-react-native-app/ notað sem hjálp við að hringja