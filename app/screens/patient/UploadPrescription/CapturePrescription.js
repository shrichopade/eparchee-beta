import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text,StyleSheet,SafeAreaView } from "react-native";
import pageStyles from '../../common/PageStyle.js';

export default class CapturePrescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView  style={pageStyles.container}>
        <View style={pageStyles.screen}>
          <View style={pageStyles.body}>
            <View style={[styles.container, styles.step1]}>
            <Text style={styles.listItemHeader}>Take a Picture - Step 1 of 3</Text>
              <View style={styles.btnContainer}>
                <Text style={styles.labelText}> Take a Picture: </Text> 
                <Image source={require('../../../../assets/images/mobile-camera.png')} 
                      style={styles.moreImage} />
              </View>
              <View style={styles.btnContainer}>
                <Text style={styles.labelText}> Upload from Google Drive: </Text> 
                <Image source={require('../../../../assets/images/g-drive.png')} 
                      style={styles.moreImage} />
              </View>
              <View style={styles.btnContainer}>
                <Text style={styles.labelText}> Upload from i-Cloud: </Text> 
                <Image source={require('../../../../assets/images/icloud.png')} 
                      style={styles.moreImage} />
              </View>
              <View style={styles.btnContainer}>
                <Text style={styles.labelText}> Upload from Dropbox: </Text> 
                <Image source={require('../../../../assets/images/Dropbox.png')} 
                      style={styles.moreImage} />
              </View>
              <View style={styles.btnContainer1}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('UploadPrescriptionStep2')}
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

// export default CapturePrescription;

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
      alignItems: 'center',
      marginTop: 10,
      marginRight: 5,
      marginLeft: 5,
      padding: 10,
      backgroundColor: '#C8E7C9',
  },
  btnContainer1: {
    flexDirection: 'row',    
    justifyContent: 'center',
    marginTop: 25,
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
  labelText: {
    fontFamily: 'Arial',
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 15,
    marginRight: 5,
    marginBottom: 2,
  },
  moreImage: {
    width: 40,
    height: 40,
    borderRadius: 25 / 2,
    marginLeft: 15,
    marginRight: 25,
    alignSelf: 'center'
  },
});