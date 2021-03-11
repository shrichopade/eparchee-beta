'use strict';
import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { RadioButton, Text, Checkbox  } from 'react-native-paper';
import ValidationComponent from 'react-native-form-validator';

import pageStyles from './PageStyle.js'
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import DefaultFooter from './DefaultFooter'

export default class SignUp extends ValidationComponent {

    constructor(props) {
        super(props);
        this.state = {
            givenName: '',
            surname: '',
            mobileNumber: '',
            referalId: '',
            yourStatus: 'P',
        }
    }

    signUp = () => {
        this._validateInputs(); 
  
        if(this.getErrorMessages().length == 0) {
          this.props.navigation.navigate('ConfirmSignUp')
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
            givenName: {required: true, minlength: 3, maxlength: 15},
            surname: {required: true, minlength: 3, maxlength: 15},
            mobileNumber: {required: true, numbers: true, minlength: 10, maxlength: 10},
            referalId: {required: true, numbers: true, minlength: 6, maxlength: 6},
        });
    }

    render() {
        return (
            <SafeAreaView  style={pageStyles.container}>
                <View style={pageStyles.screen}>
                    <View style={pageStyles.body}>
                        <AppTextInput
                            value={this.state.givenName}
                            onChangeText={(givenName) => {
                                this.setState({ givenName },
                                    () => {
                                        this.validate({
                                            givenName: { required: true, minlength: 3, maxlength: 15 },
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
                        {this.isFieldInError('givenName') 
                            && this.getErrorsInField('givenName').map(errorMessage => 
                            <Text style={styles.errorMsgText}>
                                {errorMessage}
                            </Text>) 
                        }
                        <AppTextInput
                            value={this.state.surname}
                            onChangeText={(surname) => {
                                this.setState({ surname },
                                    () => {
                                        this.validate({
                                            surname: { required: true, minlength: 3, maxlength: 15 },
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
                        {this.isFieldInError('surname') 
                            && this.getErrorsInField('surname').map(errorMessage => 
                            <Text style={styles.errorMsgText}>
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
                            <Text style={styles.errorMsgText}>
                                {errorMessage}
                            </Text>) 
                        }
                        <RadioButton.Group onValueChange={(val) => this.inputValueUpdate(val, 'yourStatus')} value={this.state.yourStatus}>
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
                            value={this.state.referalId}
                            onChangeText={(referalId) => {
                                this.setState({ referalId },
                                    () => {
                                        this.validate({
                                            referalId: { required: true, numbers: true, minlength: 6, maxlength: 6 },
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
                        {this.isFieldInError('referalId') 
                            && this.getErrorsInField('referalId').map(errorMessage => 
                            <Text style={styles.errorMsgText}>
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
