import { StyleSheet } from 'react-native';
import { silverLakeBlue, freshAir, periwinkle, jordyBlue } from '../../styles/colors';

export default StyleSheet.create({
    containor: {
        flex: 1,
      },
    imgCon: {},
    placeholder: {
      width: 150,
      height: 150,
      borderRadius: 100,
      overflow: "hidden",
      backgroundColor: jordyBlue,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 5,
      borderColor: "white"
    },
    skyContainer: {
      backgroundColor: freshAir,
      height: 100
    },
    imageContainer: {
      alignItems: "center",
      marginTop: -75,
      marginBottom: 10,
      borderBottomWidth: 0.5,
      borderBottomColor: "#d9d9d9"
    },
    contactData: {
      flex: 1,
      justifyContent: "center",
      paddingLeft: 20,
    },
    imageText: {
      fontSize: 50,
    },
    name: {
      fontSize: 40,
      color: "grey"
    },
    phoneNumber: {
      fontSize: 15,
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 100,
      borderWidth: 5,
      borderColor: "white"
    },
    phoneNumberConteinor: {
        flexDirection: "row",
        marginBottom: 10
    },
    phoneText: {
        fontWeight: "600",
        fontSize: 15,
        width: 120,
        textAlign: "right",
        marginRight: 5
    },
    placeholderPhoneCall: {
      width: 100,
      height: 100,
      borderRadius: 50,
      overflow: "hidden",
      backgroundColor: "green",
      alignItems: "center",
      justifyContent: "center",
    },
    phoneCallContainer: {
      alignItems: "center",
      marginTop: 80,
      marginBottom: 10,
    },
});