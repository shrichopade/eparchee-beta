import React from 'react';
import { TouchableHighlight,View, StyleSheet, Text } from 'react-native';
import { Button, Icon } from 'native-base';

export default class PatientFooter extends React.Component {

	render() {
		return (
      <View style={styles.tabs_container}>
      <View>
         <Button  style={styles.buttonStyle} 
                vertical onPress={() => this.props.navigation.navigate('SendtoChemistStep1')}>
                <Icon name="send" />
              <Text style={styles.buttonText}>Send to Chemist</Text>
         </Button>
      </View>
      <View>  
        <Button  style={styles.buttonStyle} 
          vertical onPress={() => this.props.navigation.navigate('PatientQRCode')}>
          <Icon name="film" />
          <Text style={styles.buttonText}>QR Code</Text>
        </Button>
      </View>
      <View>
        <Button  style={styles.buttonStyle} 
              vertical onPress={() => this.props.navigation.navigate('UploadPrescriptionStep1')}>
              <Icon name="ios-cloud-upload-outline" />
              <Text style={styles.buttonText}>Load Parchee</Text>
         </Button>
      </View>
      <View>  
        <Button  style={styles.buttonStyle} 
          vertical onPress={() => this.props.navigation.navigate('PatientHome')}>
          <Icon name="film" />
          <Text style={styles.buttonText}>Appointments</Text>
        </Button>
      </View>
    </View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    tabs_container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#4CAF50'
      // backgroundColor: '#3e3e3e'
    },
    buttonStyle:{
      backgroundColor: '#4CAF50'
    },
    buttonText: {
      fontFamily: 'Arial',
      fontSize: 12,
      alignSelf: 'center',
      color: '#fff'
    }
  });