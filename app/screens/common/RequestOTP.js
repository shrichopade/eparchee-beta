'use strict';
import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import ValidationComponent from 'react-native-form-validator';

import pageStyles from './PageStyle.js'
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import DefaultFooter from './DefaultFooter'

export default class RequestOTP extends ValidationComponent {
    constructor(props) {
      super(props);
      this.state = {
        username: ''
      }
    }

    requestOTP = () => {
      this._validateInputs(); 

      if(this.getErrorMessages().length == 0) {
        this.props.navigation.navigate('ResetPassword')
      }
    }
  
    inputValueUpdate = (val, prop) => {
      const state = this.state;
      state[prop] = val;
      this.setState(state);
    }
  
    _validateInputs() {
      // Call ValidationComponent validate method
      this.validate({
        username: {required: true, email: true}
      });
    }
  
    render() {
      return (
        <SafeAreaView  style={pageStyles.container}>
            <View style={pageStyles.screen}>
                <View style={pageStyles.body}>
                    <AppTextInput
                        value={this.state.username}
                        onChangeText={(username) => {
                          this.setState({ username },
                              () => {
                                  this.validate({
                                      username: { required: true, email: true },
                                  })
                                }
                              )                                    
                          }
                        }
                        leftIcon="email-open"
                        placeholder="Enter username"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        />
                        {this.isFieldInError('username') 
                            && this.getErrorsInField('username').map(errorMessage => 
                            <Text style={styles.errorMsgText}>
                                {errorMessage}
                            </Text>) 
                        }
                    <View style={styles.buttonContainer}>    
                        <AppButton title="Send Code" 
                            onPress={() => this.requestOTP() } />
                    </View>
                </View>
                <View style={pageStyles.footer}>
                    <DefaultFooter navigation={this.props.navigation}/>
                </View>
            </View>
        </SafeAreaView>
      )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorMsgText: {
      fontFamily: 'Arial',
      color: 'red',
      fontSize: 14,
      marginLeft: 15,
      marginBottom: 10,
    },
    errorImage: {
        width: 14,
        height: 14,
        borderRadius: 14 / 2,
        marginTop: 2,
        marginRight: 5,
        alignSelf: 'center'
    },
});