'use strict';
import React from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text } from 'native-base';
import { Auth } from 'aws-amplify';
import ValidationComponent from 'react-native-form-validator';

import pageStyles from './PageStyle.js'
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import DefaultFooter from './DefaultFooter'
import * as Constants from '../config/ConstantsList'

export default class SignIn extends ValidationComponent {

    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
        }
      }

    signIn = async () => {
        this._validateInputs(); 

        if(this.getErrorMessages().length == 0) {
            
            try {
                await Auth.signIn(this.state.username, this.state.password);
                console.log(' Successfully Login');
                //updateAuthState('loggedIn');

                if(this.state.username == "P@gmail.com" || this.state.username == "p@gmail.com" ) {
                    this.props.navigation.navigate('PatientHome')
                } else if(this.state.username == "D@gmail.com" || this.state.username == "d@gmail.com" ) {
                    this.props.navigation.navigate('DoctorHome')
                } else if(this.state.username == "C@gmail.com" || this.state.username == "c@gmail.com" ) {
                    this.props.navigation.navigate('ChemistHome')
                } else {
                    this.props.navigation.navigate('PatientHome')
                }
            } catch(UserNotFoundException) {
                console.log('User not found => ', UserNotFoundException)
                this.props.navigation.navigate('SignIn', {loginStatus: 'Invalid login details, Please try again...'})
                console.log('NAV -->', this.props.navigation)
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
          username: {required: true, email: true} ,
          password: {minlength:8, maxlength:12, required: true},
        });
    }

    render() {
        //const { params } = this.props.navigation.state;
        //const { loginStatus } = params ? params.loginStatus : null;
        //const loginStatus = this.props.navigation.getParam('loginStatus', '')
        //const { loginStatus } = "Invalid user";

        return (
            <SafeAreaView  style={pageStyles.container}>
                <View style={pageStyles.screen}>
                    <View style={pageStyles.body}>
                        <Image source={require('../../../assets/images/parchee-logo.png')} 
                            style={styles.imageTitle} />
                        
                        {/*<Text key="loginStatus" style={styles.errorMsgText}>
                            { loginStatus }
                        </Text> */}

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
                                                password: { required: true, minlength:8, maxlength:12 },
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
                        <View style={styles.buttonContainer}>    
                            <AppButton title="Sign In" onPress={() => this.signIn()} />
                        </View>
                        <View style={styles.buttonParallel}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('RequestOTP')}>
                                <Text style={styles.forgotPasswordButtonText}>
                                    Reset Password
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                                <Text style={styles.forgotPasswordButtonText}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonParallel}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
                                <Image source={require('../../../assets/images/google.png')} 
                                    style={styles.imageButton} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
                                <Image source={require('../../../assets/images/facebook.png')} 
                                    style={styles.imageButton} />
                            </TouchableOpacity>
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
    imageTitle:{
        width: 350,
        height: 150,
        alignSelf: 'center',
        marginVertical: 20
    },
    buttonContainer: {
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonParallel: {
        marginVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    forgotPasswordButtonText: {
        color: '#0000EE',
        fontFamily: 'Arial',
        fontSize: 16,
        fontWeight: '600'
    },
    imageButton:{
        width: 180,
        height: 40,
        alignSelf: 'center',
        marginVertical: 10
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