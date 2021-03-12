import React, { Component } from "react";
import { Image, View, TouchableOpacity, FlatList, 
  Text,StyleSheet,SafeAreaView } from "react-native";

import pageStyles from '../../common/PageStyle.js';
import medication_data from '../../../data/capturedprescription';
import { renderCapturedPrescriptionItem } from '../../../lib/general';

export default class ConfirmPrescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView  style={pageStyles.container}>
      <View style={pageStyles.screen}>
        <View style={pageStyles.body}>
          <View style={[styles.container, styles.step1]}>
          <Text style={styles.listItemHeader}>Captured Prescription - Step 3 of 3</Text>
            <FlatList data={medication_data} renderItem={renderCapturedPrescriptionItem} />
            <View style={styles.btnContainer}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('UploadPrescriptionStep2')}
                style={styles.btnStyle}>
                        <Image
                          source={require("../../../../assets/images/leftarrow.png")}
                          style={styles.btnImage}
                          resizeMode="cover"
                        />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('PatientHome')}
                style={styles.btnStyle}>
                        <Image
                          source={require("../../../../assets/images/rightarrow.png")}
                          style={styles.btnImage}
                          resizeMode="cover"
                        />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
    );
  }
}

// export default UploadPrescription1;

const styles = StyleSheet.create({
  
  container: {
      flexDirection: 'column',
      justifyContent: 'space-between',
  },
  listItemHeader: {
    padding: 10,
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold',
    backgroundColor: '#93cf96'
  },
  btnContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
  },
  icon:{
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginLeft: 15,
    marginRight: 5,
    alignSelf: 'center'
  },
  input: {
      fontFamily: 'Arial',
      fontSize: 10,
      fontWeight: '400',
      marginLeft: 5,
      marginRight: 5,
      alignSelf: 'center'
  },
  currentStepText: {
      fontFamily: 'Arial',
      fontSize: 18,
      fontWeight: '600',
      marginLeft: 15,
      marginRight: 5,
      marginVertical: 3,
      marginBottom: 5,
      alignSelf: 'center'
  },
   btnImage: {
      width: 40,
      height: 40,
      borderRadius: 40 / 2,
      marginLeft: 15,
      marginRight: 5,
      alignSelf: 'center'
  },
  btnImage1: {
    width: 300,
    height: 440,
    borderRadius: 40 / 2,
    marginLeft: 15,
    marginRight: 5,
    alignSelf: 'center'
}
});