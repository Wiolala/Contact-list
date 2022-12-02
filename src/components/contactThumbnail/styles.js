import { StyleSheet } from 'react-native';
import { silverLakeBlue, freshAir, periwinkle, jordyBlue } from '../../styles/colors';

export default StyleSheet.create({
    contactContainor: {
        flex: 1,
        flexDirection: "row",
        padding: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: "#d9d9d9",
      },
      imgCon: {},
      placeholder: {
        width: 55,
        height: 55,
        borderRadius: 30,
        overflow: "hidden",
        backgroundColor: jordyBlue,
        alignItems: "center",
        justifyContent: "center",
      },
      contactData: {
        flex: 1,
        justifyContent: "center",
        paddingLeft: 5,
      },
      imageText: {
        fontSize: 18,
      },
      name: {
        fontSize: 16,
      },
      phoneNumber: {
        color: "#888",
      },
      image: {
        width: 55,
        height: 55,
        borderRadius: 30,
        borderWidth: 1
    }
});