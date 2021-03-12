import React from 'react';
import { SafeAreaView, View,Text, 
  FlatList, StyleSheet,TouchableHighlight, Image } from 'react-native';

import pageStyles from '../common/PageStyle.js'
import PatientFooter from './PatientFooter'
import medication_data from '../../data/activeprescription';
import appointment_data from '../../data/patientappointments';
import order_data from '../../data/patientorders';

export default class PatientHome extends React.Component {

    constructor() {
        super();
    }

    renderItemOrders= ({item}) => {
        return (
            <TouchableHighlight underlayColor="#ccc" onPress={() => {
                this.props.navigation.navigate('PatientOrderDetails')
                }} style={styles.listItem}
            >
                <View key={item.key} style={styles.rootContainer}>         
                    <View style={styles.itemContainer}>
                        <View style={styles.nameContainer}>
                            <Image source={item.status_image} resizeMode='contain'
                                    style={styles.statusImage} />
                            <Text style={styles.statusText}>{item.status}</Text>
                        </View>
                        <View style={styles.nameContainer}>
                          <Text style={styles.patientText}>{item.chemist}</Text>
                          <Text style={styles.doctorText}>{item.doctor}</Text>
                          <Text style={styles.dueDateText}>{item.due_date}</Text>
                        </View>
                      </View>
                      <Image source={require('../../../assets/images/show-more.png')} 
                      style={styles.moreImage} />
                </View>
             </TouchableHighlight>
        );
      }

      renderPrescriptionItem({item}) {
        return (
          <TouchableHighlight underlayColor="#ccc" style={styles.listItem}>
                <View key={item.key} style={styles.itemContainer}>
                    <View style={styles.itemContainer}>
                        <View style={styles.nameContainer}>
                            <Image source={item.image} resizeMode='contain'
                                    style={styles.statusImage1} />                      
                        </View>
                        <View style={styles.nameContainer}>
                          <Text style={styles.patientText}>{item.name}</Text>
                          <Text style={styles.dueDateText}>{item.dosage}</Text>
                          <Text style={styles.doctorText}>{item.doctor}</Text>
                        </View>
                       
                    </View>
                </View>
          </TouchableHighlight>
        );
      }

      renderItemAppointment({item}) {
        return (
          <TouchableHighlight underlayColor="#ccc" style={styles.listItem}>
            <View key={item.key} style={styles.itemContainer}>             
                <View style={styles.itemContainer}> 
                  <View style={styles.nameContainer}>
                      <Image source={require("../../../assets/images/calendar.png")} 
                            resizeMode='contain'
                            style={styles.aptImage} />                      
                  </View> 
                  <View style={styles.nameContainer}>
                    <Text style={styles.doctorText}>{item.date}</Text>
                    <Text style={styles.doctorText}>{item.doctor}</Text>
                  </View>
                  <View style={styles.nameContainer}>
                    <Text style={styles.doctorText}>{item.time}</Text> 
                    <Text style={styles.doctorText}>{item.location}</Text> 
                  </View>
                </View>
            </View>
          </TouchableHighlight>
        );
      }

    render() {
        return (
            <SafeAreaView  style={pageStyles.container}>
                <View style={pageStyles.screen}>
                    <View style={pageStyles.body}>
                        <Text style={styles.listItemHeader}>My Medication</Text>
                        <FlatList style={styles.flatListStyle} 
                          data={medication_data} renderItem={this.renderPrescriptionItem} />

                        <Text style={styles.listItemHeader}>My Appointments</Text>
                        <FlatList  style={styles.flatListStyle} 
                          data={appointment_data} renderItem={this.renderItemAppointment} />

                        <Text style={styles.listItemHeader}>My Parchee Orders</Text>
                        <FlatList  style={styles.flatListStyle} 
                            data={order_data.filter(renderOrder => renderOrder !== null)} 
                            renderItem={this.renderItemOrders}/>  
                    </View>
                    <View style={pageStyles.footer}>
                        <PatientFooter navigation={this.props.navigation}/>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
  flatListStyle: {
    height: '33%',
    flexGrow: 0
  },
  rootContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
  itemContainer: {
      flexDirection: 'row'
  },
  nameContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
  },
  listItemHeader: {
      padding: 10,
      fontSize: 20,
      marginTop: 10,
      marginBottom: 5,
      fontWeight: 'bold',
      backgroundColor: '#93cf96'
  },
  listItem: {
    padding: 10,
    backgroundColor: '#C8E7C9',
    borderBottomWidth: 5,
    borderBottomColor: '#f3f3f3'
  },
  statusImage: {
      width: 50,
      height: 50,
      borderRadius: 50 / 2,
      marginLeft: 5,
      marginRight: 5,
      alignSelf: 'center'
  },
  statusImage1: {
    width: 60,
    height: 60,
    borderRadius: 35 / 2,
    marginLeft: 5,
    marginRight: 5
    
  },
  statusText: {
      fontFamily: 'Arial',
      fontSize: 10,
      fontWeight: '400',
      marginLeft: 5,
      marginRight: 5,
      alignSelf: 'center'
  },
  patientText: {
      fontFamily: 'Arial',
      fontSize: 18,
      fontWeight: '600',
      marginLeft: 15,
      marginRight: 5,
      marginVertical: 0,
      marginBottom: 0
  },
  doctorText: {
      fontFamily: 'Arial',
      fontSize: 16,
      fontWeight: '500',
      marginLeft: 15,
      marginRight: 5,
      marginBottom: 2,
  },
  dueDateText: {
      fontFamily: 'Arial',
      fontSize: 14,
      fontWeight: '400',
      marginLeft: 15,
      marginRight: 5
  },
  moreImage: {
      width: 40,
      height: 40,
      borderRadius: 40 / 2,
      marginLeft: 15,
      marginRight: 5,
      alignSelf: 'center'
  },
  aptImage: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    marginLeft: 15,
    marginRight: 5,
    alignSelf: 'center'
  },
});