import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';

export default class DefaultFooter extends React.Component {

	render() {
		return (
			<View style={styles.tabs_container}>
          <Text style={styles.footerText}>Copyright Parchee, all rights reserved</Text>
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
    footerText: {
      color: '#fff',
      fontFamily: 'Arial',
      fontSize: 10,
      fontWeight: '400',
      alignSelf: 'center',
      marginVertical: 8
    }
  });