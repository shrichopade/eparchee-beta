import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import ValidationComponent from 'react-native-form-validator';
import { Auth } from 'aws-amplify';

import pageStyles from '../../common/PageStyle.js';
import DoctorFooter from '../DoctorFooter';
import AppTextInput from '../../../components/AppTextInput';


export default class ChangePassword extends ValidationComponent {

    constructor(props) {
        super(props);
        this.state = {
          oldPassword: '',
          password: '',
          confirmPassword: ''
        }
    }

    changePassword = async () => {
        this._validateInputs(); 
  
        if(this.getErrorMessages().length == 0) {
            try {
                const currentUser = await Auth.currentAuthenticatedUser();
                await Auth.changePassword(currentUser, 
                        this.state.oldPassword, this.state.password);
                console.log('Password changed successfully');
                this.props.navigation.navigate('DoctorHome');
            } catch(error) {
                console.log("Error in sending code", error);
            }
        }
    }

    _validateInputs() {
        // Call ValidationComponent validate method
        this.validate({
            oldPassword: {required: true, minlength: 3, maxlength: 8},
            password: {required: true, minlength: 3, maxlength: 8},
            confirmPassword: {equalPassword : this.state.password}
        });
    }


    render() {
        return (
            <SafeAreaView  style={pageStyles.container}>
                <View style={pageStyles.screen}>
                    <View style={pageStyles.body}>
                        <Text style={styles.pageTitle}>CHANGE PASSWORD</Text>
                        <AppTextInput
                            value={this.state.oldPassword}
                            onChangeText={(oldPassword) => {
                                this.setState({ oldPassword },
                                    () => {
                                        this.validate({
                                            oldPassword: { required: true, minlength: 3, maxlength: 8 },
                                        })
                                      }
                                    )                                    
                                }
                            }
                            leftIcon="lock"
                            placeholder="Enter current password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                            textContentType="password"
                            />
                        {this.isFieldInError('oldPassword') 
                            && this.getErrorsInField('oldPassword').map(errorMessage => 
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
                            placeholder="Enter new password"
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
                            placeholder="Confirm new password"
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
                        <Button success style={styles.buttonStyle} title="Submit" 
                            onPress={() => this.changePassword() } >
                            <Text style={styles.buttonText}>Submit</Text>
                        </Button>
                    </View>
                    <View style={pageStyles.footer}>
                        <DoctorFooter navigation={this.props.navigation}/>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    pageTitle: {
        padding: 10,
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        backgroundColor: '#93cf96'
    },
    buttonStyle: {
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginBottom: 5,
        width: '20%'
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
        textTransform: 'uppercase'
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

