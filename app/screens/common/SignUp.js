'use strict';
import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { RadioButton, Text, Checkbox  } from 'react-native-paper';
import ValidationComponent from 'react-native-form-validator';
import { Auth } from 'aws-amplify';

import pageStyles from './PageStyle.js'
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import DefaultFooter from './DefaultFooter'

export default class SignUp extends ValidationComponent {

    constructor(props) {
        super(props);
        this.state = {
            given_name: '',
            family_name: '',
            mobileNumber: '',
            referralId: '',
            userCategory: 'P',
            username: '',
            password: '',
            confirmPassword: ''
        }
    }

    signUp = async () => {
        this._validateInputs(); 
  
        if(this.getErrorMessages().length == 0) {
            try {
                const { username, password, given_name, family_name, 
                    mobileNumber, userCategory, referralId } = this.state;

                await Auth.signUp({
                    'username' : username,
                    'password' : password,
                    attributes : {
                        'given_name': given_name,
                        'family_name': family_name,
                        'custom:mobileNumber': mobileNumber,
                        'custom:userCategory': userCategory,
                        'custom:referralId': referralId
                    }
                });
                this.props.navigation.navigate('ConfirmSignUp');
            } catch(error) {
                console.log("Error in Sign up", error);
            }
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
            given_name: {required: true, minlength: 3, maxlength: 15},
            family_name: {required: true, minlength: 3, maxlength: 15},
            mobileNumber: {required: true, numbers: true, minlength: 10, maxlength: 10},
            referralId: {required: true, numbers: true, minlength: 3, maxlength: 3},
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
                            value={this.state.given_name}
                            onChangeText={(given_name) => {
                                this.setState({ given_name },
                                    () => {
                                        this.validate({
                                            given_name: { required: true, minlength: 3, maxlength: 15 },
                                        })
                                      }
                                    )                                    
                                }
                            }
                            leftIcon="face"
                            placeholder="Enter First names"
                            autoCapitalize="words"
                            keyboardType="default"
                            textContentType="givenName"
                        />
                        {this.isFieldInError('given_name') 
                            && this.getErrorsInField('given_name').map(errorMessage => 
                            <Text key={errorMessage} style={styles.errorMsgText}>
                                {errorMessage}
                            </Text>) 
                        }
                        <AppTextInput
                            value={this.state.family_name}
                            onChangeText={(family_name) => {
                                this.setState({ family_name },
                                    () => {
                                        this.validate({
                                            family_name: { required: true, minlength: 3, maxlength: 15 },
                                        })
                                      }
                                    )                                    
                                }
                            }
                            leftIcon="face"
                            placeholder="Enter Surname"
                            autoCapitalize="words"
                            keyboardType="default"
                            textContentType="familyName"
                        />
                        {this.isFieldInError('family_name') 
                            && this.getErrorsInField('family_name').map(errorMessage => 
                            <Text key={errorMessage} style={styles.errorMsgText}>
                                {errorMessage}
                            </Text>) 
                        }                 
                        <AppTextInput
                            value={this.state.mobileNumber}
                            onChangeText={(mobileNumber) => {
                                this.setState({ mobileNumber },
                                    () => {
                                        this.validate({
                                            mobileNumber: { required: true, numbers: true, minlength: 10, maxlength: 10 },
                                        })
                                      }
                                    )                                    
                                }
                            }
                            leftIcon="file-code"
                            placeholder="Enter mobile number"
                            autoCapitalize="none"
                            keyboardType="phone-pad"
                            textContentType="telephoneNumber"
                        />
                        {this.isFieldInError('mobileNumber') 
                            && this.getErrorsInField('mobileNumber').map(errorMessage => 
                            <Text key={errorMessage} style={styles.errorMsgText}>
                                {errorMessage}
                            </Text>) 
                        }
                        <RadioButton.Group onValueChange={(val) => this.inputValueUpdate(val, 'userCategory')} value={this.state.userCategory}>
                            <View style={styles.buttonParallel}>
                                <RadioButton value="P" />
                                <Text style={styles.radioText}>Patient</Text>
                                <RadioButton value="D" />
                                <Text style={styles.radioText}>Doctor</Text>
                                <RadioButton value="C" />
                                <Text style={styles.radioText}>Chemist</Text>
                            </View>
                        </RadioButton.Group>
                        <AppTextInput
                            value={this.state.referralId}
                            onChangeText={(referralId) => {
                                this.setState({ referralId },
                                    () => {
                                        this.validate({
                                            referralId: { required: true, numbers: true, minlength: 3, maxlength: 3 },
                                        })
                                      }
                                    )                                    
                                }
                            }
                            leftIcon="file-code"
                            placeholder="Enter Referral ID"
                            autoCapitalize="none"
                            keyboardType="phone-pad"
                            textContentType="creditCardNumber"
                        />
                        {this.isFieldInError('referralId') 
                            && this.getErrorsInField('referralId').map(errorMessage => 
                            <Text key={errorMessage} style={styles.errorMsgText}>
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
                            <Text key={errorMessage} style={styles.errorMsgText}>
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
                            <Text key={errorMessage} style={styles.errorMsgText}>
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
                            <Text key={errorMessage} style={styles.errorMsgText}>
                                {errorMessage}
                            </Text>) 
                        }
                        <View style={styles.buttonContainer}>    
                            <AppButton title="Confirm" 
                                onPress={() => this.signUp() } />
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
    buttonParallel: {
        flex: 0,
        flexDirection: 'row',
    },
    radioText: {
        fontFamily: 'Arial',
        fontSize: 16,
        color: '#808080'
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
