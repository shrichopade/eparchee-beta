import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  list: {
    flex: 1
  },
  nameContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  
  itemContainer: {      
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
  },
    
  itemContainer1: {      
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
},
  list_item_header: {
    padding: 10,
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold',
    backgroundColor: '#93cf96'
  },
  list_item: {
    padding: 10,
    backgroundColor: '#C8E7C9',
    borderBottomWidth: 5,
    borderBottomColor: '#f3f3f3'
  },
  patientText: {
    fontFamily: 'Arial',
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 15,
        marginRight: 5,
        marginVertical: 3,
        marginBottom: 5
  },
  statusImage: {
      width: 50,
      height: 50,
      borderRadius: 50 / 2,
      marginLeft: 5,
      marginRight: 5
      
  },
  statusImage1: {
    width: 80,
    height: 80,
    borderRadius: 50 / 2,
    marginLeft: 5,
    marginRight: 5
    
},
  statusText: {
      fontFamily: 'Arial',
      fontSize: 10,
      fontWeight: '400',
      marginLeft: 5,
      marginRight: 5
      
  },
  moreImage: {
      width: 40,
      height: 40,
      borderRadius: 40 / 2,
      marginLeft: 15,
      marginRight: 5,
      alignItems: 'flex-end',
      alignSelf: 'flex-end',
      flexDirection: 'row'
      
  },
  doctorText: {
    fontFamily: 'Arial',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 15,
    marginRight: 5,
    marginBottom: 5,
  },
  dueDateText: {
    fontFamily: 'Arial',
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 15,
    marginRight: 5
  },
  checkboxStyle: {
    marginLeft: 5,
    marginRight: 15
  },
});

export default styles;