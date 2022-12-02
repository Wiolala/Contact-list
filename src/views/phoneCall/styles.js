import { StyleSheet } from 'react-native';
import { silverLakeBlue, freshAir, periwinkle } from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        textAlign: 'center',
      },
    titleText: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        },
    titleTextsmall: {
        marginVertical: 8,
        fontSize: 16,
        },
    phoneCallContainer: {
        alignItems: "center",
        marginTop: 30,
        marginBottom: 10,
        },
    placeholderPhoneCall: {
        width: 55,
        height: 55,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        padding: 10,
        backgroundColor: "green",
        },
    buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
        },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 10,
        },
});