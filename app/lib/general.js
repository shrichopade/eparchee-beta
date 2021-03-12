import React from 'react';
import { Text, Icon, View,TouchableHighlight, Image, Picker, } from 'react-native';
import {CheckBox} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';


function renderItem({item}) {
    return (
      <TouchableHighlight underlayColor="#ccc" onPress={() => {
        console.log('pressed!');
      }} style={styles.list_item}>
        <Text key={item.key}>{item.name}</Text>
      </TouchableHighlight>
    );
}
function renderPrescription({item}) {
  return (
    <TouchableHighlight underlayColor="#ccc" onPress={() => {
      console.log('pressed!');
    }} style={styles.list_item}>
      <Text key={item.key}>{item.name}</Text>
    </TouchableHighlight>
  );
}

function renderPickerItems(data) {
  return data.map((item) => {
    let val = item.name.toLowerCase();
    return (
      <Picker.Item key={item.key} label={item.name} value={val} />
    );
  });
}

function renderItemAppointment({item}) {
  return (
    <TouchableHighlight underlayColor="#ccc" onPress={() => {
      console.log('appointment pressed pressed!');}} style={styles.list_item}>
      
          <View key={item.key} style={styles.itemContainer}>             
                  {/* <View style={styles.itemContainer}> */}
                    <IconButton icon="calendar-today" /> 
                    <View style={styles.nameContainer}>
                      <Text style={styles.patientText}>{item.date}</Text>
                      <Text style={styles.patientText}>{item.time}</Text>
                    </View>
                    <Text style={styles.patientText}>{item.doctor}</Text> 
                    <Text style={styles.patientText}>{item.location}</Text> 
                  {/* </View>                   */}
              
          </View>
    
      
    </TouchableHighlight>
  );
}

{/*function renderItemOrders({item}) {
  return (
    <TouchableHighlight underlayColor="#ccc" onPress={() => {
      console.log('pressed!');
    }} style={styles.list_item}>
      <Text key={item.key}>{item.date} {item.chemist}</Text>
    </TouchableHighlight>
  );
} */}
function renderItemOrders({item}) {
  return (
    // <TouchableHighlight underlayColor="#ccc" onPress={() => { 
          // console.log('pressed!');  }} style={styles.list_item}    >
      
              <View key={item.key} style={styles.itemContainer}>
                  <View style={styles.nameContainer}>
                      <Image source={item.status_image} resizeMode='contain'
                              style={styles.statusImage} />
                      <Text style={styles.statusText}>{item.status}</Text>
                  </View>
                  <View style={styles.nameContainer}>
                    <Text style={styles.patientText}>{item.patient}</Text>
                    <Text style={styles.doctorText}>{item.doctor}</Text>
                    <Text style={styles.dueDateText}>{item.due_date}</Text>
                  </View>
                  <View style={styles.nameContainer}>
                      <Image source={require('../../assets/images/show-more.png')} 
                      style={styles.moreImage} />
                  </View>
              </View>
         
    // </TouchableHighlight>
  );
}

function renderPrescriptionItem({item}) {
  return (
    <TouchableHighlight underlayColor="#ccc" onPress={() => {
          console.log('Pre pressed!');
      }} style={styles.list_item}>
      {/* <Text key={item.key}> */}
          <View key={item.key} style={styles.itemContainer}>
              <View style={styles.itemContainer}>
                  <View style={styles.nameContainer}>
                      <Image source={item.image} resizeMode='contain'
                              style={styles.statusImage} />                      
                  </View>
                  <View style={styles.nameContainer1}>
                    <Text style={styles.patientText}>{item.name}</Text>
                    <Text style={styles.doctorText}>{item.dosage}</Text>
                    <Text style={styles.doctorText}>{item.doctor}</Text>
                  </View>
                 
              </View>
          </View>
      {/* </Text> */}
    </TouchableHighlight>
  );
}

function renderCapturedPrescriptionItem({item}) {
  return (
    <TouchableHighlight underlayColor="#ccc" onPress={() => {
          console.log('cap pre pressed!');
      }} style={styles.list_item}>
      {/* <Text key={item.key}> */}
          <View key={item.key} style={styles.itemContainer}>
              <View style={styles.itemContainer}>
                  <View style={styles.nameContainer}>
                      <Image source={item.image} resizeMode='contain'
                              style={styles.statusImage1} />                      
                  </View>
                  <View style={styles.nameContainer1}>
                    <Text style={styles.patientText}>{item.name}</Text>
                    <Text style={styles.doctorText}>{item.dosage}</Text>
                    <Text style={styles.doctorText}>{item.doctor}</Text>
                  </View>                  
              </View>
              <CheckBox style={styles.checkboxStyle} checked={true} color="green" />
          </View>
      {/* </Text> */}
    </TouchableHighlight>
  );
}




export { renderItem,renderCapturedPrescriptionItem,renderPickerItems,renderItemAppointment,renderItemOrders,renderPrescription,renderPrescriptionItem };