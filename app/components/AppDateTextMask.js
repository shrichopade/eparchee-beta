import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AppDateTextMask({ leftIcon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {leftIcon && (
        <MaterialCommunityIcons
          name={leftIcon}
          size={20}
          color="#6e6869"
          style={styles.icon}
        />
      )}
      <TextInputMask
        style={styles.input}
        placeholderTextColor="#6e6869"
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  },
  input: {
    width: '80%',
    fontSize: 16,
    color: '#101010'
  }
});