'use strict';
import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import ValidationComponent from 'react-native-form-validator';

import pageStyles from './PageStyle.js'
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import DefaultFooter from './DefaultFooter'

export default class ConfirmSignUp extends ValidationComponent {

    constructor(props) {
        super(props);
        this.state = {
          passcode: '',
          username: '',
          password: '',
          confirmPassword: ''
        }
    }

    confirmSignUp = () => {
        this._validateInputs(); 
  
        if(this.getErrorMessages().length == 0) {
          this.props.navigation.navigate('SignIn')
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
            passcode: {required: true, numbers: true, minlength: 6, maxlength: 6},
            username: {required: true, email: true},
            password: {required: true, minlength: 3, maxlength: 8},
            confirmPassword: {equalPassword : this.state.password}
        });
    }

    render() {
        return (
            <SafeAreaView  style={pageStyles.container}>
                <View style={pageStyles.screen}>
                    <View style={pageStyles.body}>
                        <AppTextInput
                            value={this.state.passcode}
                            onChangeText={(passcode) => {
                                this.setState({ passcode },
                                    () => {
                                        this.validate({
                                            passcode: { required: true, numbers: true, minlength: 6, maxlength: 6 },
                                        })
                                      }
                                    )                                    
                                }
                            }
                            leftIcon="file-code"
                            placeholder="Enter passcode"
                            autoCapitalize="none"
                            keyboardType="phone-pad"
                            textContentType="oneTimeCode"
                            />
                        {this.isFieldInError('passcode') 
                            && this.getErrorsInField('passcode').map(errorMessage => 
                            <Text style={styles.errorMsgText}>
                                {errorMessage}
                            </Text>) 
                        }
                        <AppTextInput
                            value={this.state.username}
                            onChangeText={(username) => {
                                this.setState({ username },
                                    () => {
                                        this.validate({
                                            username: { required: true, email: true },
                                        })
                                    }
                                )}
                            }
                            leftIcon="email-open"
                            placeholder="Enter email address"
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
                        <AppTextInput
                            value={this.state.password}
                            onChangeText={(password) => {
                                this.setState({ password },
                                    () => {
                                        this.validate({
                                            password: { required: true, minlength: 3, maxlength: 8 },
                                        })
                                      }
                                    )                                    
                                }
                            }
                            leftIcon="lock"
                            placeholder="Enter password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                            textContentType="password"
                            />
                        {this.isFieldInError('password') 
                            && this.getErrorsInField('password').map(errorMessage => 
                            <Text style={styles.errorMsgText}>
                                {errorMessage}
                            </Text>) 
                        }
                        <AppTextInput
                            value={this.state.confirmPassword}
                            onChangeText={(confirmPassword) => {
                                this.setState({ confirmPassword },
                                    () => {
                                        this.validate({
                                            confirmPassword: { equalPassword : this.state.password },
                                        })
                                      }
                                    )                                    
                                }
                            }
                            leftIcon="lock"
                            placeholder="Confirm password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                            textContentType="password"
                            />
                        {this.isFieldInError('confirmPassword') 
                            && this.getErrorsInField('confirmPassword').map(errorMessage => 
                            <Text style={styles.errorMsgText}>
                                {errorMessage}
                            </Text>) 
                        }
                        <View style={styles.buttonContainer}>    
                            <AppButton title="Register" 
                                onPress={() => this.confirmSignUp()} />
                        </View>
                    </View>
                    <View style={pageStyles.footer}>
                        <DefaultFooter navigation={this.props.navigation}/>
                    </View>
                </View>
            </SafeAreaView>
        );
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