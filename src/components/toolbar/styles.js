import { StyleSheet } from 'react-native';
import { silverLakeBlue, jordyBlue } from '../../styles/colors';

export default StyleSheet.create({
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        backgroundColor: jordyBlue
    },
    toolbarAction: {
        flex: 1,
        alignItems: 'center'
    },
    toolbarActionText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    },
    delete: {
        marginLeft: 10,
    }
});