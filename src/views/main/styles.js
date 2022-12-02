import { StyleSheet } from 'react-native';
import { silverLakeBlue, freshAir, periwinkle } from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-around"
    },
    entranceText: {
        fontWeight: "bold",
        fontSize: 23,
        borderBottomWidth: 0.5,
        borderBottomColor: "#d9d9d9"
    },
      buttonContacts:{
        shadowColor: '#474747',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
    
        elevation: 12,
        marginVertical: 20,
        marginHorizontal: 40,
        backgroundColor:"#e2e2e2",
        //flexBasis: '42%',
        width:120,
        height:120,
        borderRadius:60,
        alignItems:'center',
        justifyContent:'center'
      },
      contactsImage:{
        height: 50,
        width: 50,
        alignSelf:'center'
      },
      contactsHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems:"center", 
        justifyContent:"center"
      },
      contactsTitle:{
        fontSize:20,
        flex:1,
        alignSelf:'center',
        fontWeight:'bold'
      },
      buttonDelete: {
        shadowColor: '#474747',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        marginTop: -75,
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
    
        elevation: 12,
        marginVertical: 20,
        marginHorizontal: 40,
        backgroundColor:"#e2e2e2",
        //flexBasis: '42%',
        width: 100,
        height: 100,
        borderRadius:60,
        alignItems:'center',
        justifyContent:'center'
      }
    
});