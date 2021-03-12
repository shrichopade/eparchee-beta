import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text  } from 'react-native-paper';
import { Button, Icon } from 'native-base';

export default class ChemistFooter extends React.Component {

	render() {
		return (
			  <View style={styles.tabs_container}>
          <View>  
            <Button  style={styles.buttonStyle} 
              vertical onPress={() => this.props.navigation.navigate('ChemistQRCode')}>
              <Icon name="film" />
              <Text style={styles.buttonText}>QR Code</Text>
            </Button>
          </View>
          <View>
            <Button  style={styles.buttonStyle} 
              vertical onPress={() => this.props.navigation.navigate('ChemistHome')}>
              <Icon name="flame" />
              <Text style={styles.buttonText}>Current Orders</Text>
            </Button>
          </View>
          <View>
            <Button  style={styles.buttonStyle} 
              vertical onPress={() => this.props.navigation.navigate('UpcomingOrders')}>
              <Icon name="grid" />
              <Text style={styles.buttonText}>Repeat Orders</Text>
            </Button>            
          </View>
          <View>
            <Button  style={styles.buttonStyle} 
              vertical onPress={() => this.props.navigation.navigate('OldOrders')}>
              <Icon name="keypad" />
              <Text style={styles.buttonText}>Archived Orders</Text>
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