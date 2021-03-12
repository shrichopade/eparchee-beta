import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { Text  } from 'react-native-paper';

import pageStyles from '../../common/PageStyle.js';
import DoctorFooter from '../DoctorFooter';
import AppTextInput from '../../../components/AppTextInput';

export default class ManagePersonalInfo extends React.Component {

    constructor() {
        super();
        this.state = {
            givenName: 'Dr Sudhir',
            surname: 'Phadke',
            username: 's.phadke@gmail.com',
            mobileNumber: '8776589765',
            aadharCard: '',
            hospital: '',
            registrationNumber: '',
            Address: ''
        }
    }

    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    render() {
        return (
            <SafeAreaView  style={pageStyles.container}>
                <View style={pageStyles.screen}>
                    <View style={pageStyles.body}>
                        <Text style={styles.pageTitle}>PERSONAL INFO - Dr Sudhir Phadke</Text>
                        <AppTextInput
                            value={this.state.username}
                            onChangeText={(val) => this.inputValueUpdate(val, 'username')}
                            leftIcon="email-open"
                            placeholder="Enter email address"
                            autoCapitalize="none"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                        />                      
                        <AppTextInput
                            value={this.state.mobileNumber}
                            onChangeText={(val) => this.inputValueUpdate(val, 'mobileNumber')}
                            leftIcon="phone"
                            placeholder="Enter mobile number"
                            autoCapitalize="none"
                            keyboardType="phone-pad"
                            textContentType="telephoneNumber"
                        />
                        <AppTextInput
                            value={this.state.aadharCard}
                            onChangeText={(val) => this.inputValueUpdate(val, 'aadharCard')}
                            leftIcon="identifier"
                            placeholder="Enter Aadhar number"
                            autoCapitalize="none"
                            keyboardType="phone-pad"
                            textContentType="creditCardNumber"
                        />
                        <AppTextInput
                            value={this.state.hospital}
                            onChangeText={(val) => this.inputValueUpdate(val, 'hospital')}
                            leftIcon="shopping"
                            placeholder="Enter Hospital Name"
                            autoCapitalize="words"
                            keyboardType="default"
                            textContentType="familyName"
                        />
                        <AppTextInput
                            value={this.state.registrationNumber}
                            onChangeText={(val) => this.inputValueUpdate(val, 'registrationNumber')}
                            leftIcon="cash-register"
                            placeholder="Enter Registration number"
                            autoCapitalize="none"
                            keyboardType="phone-pad"
                            textContentType="creditCardNumber"
                        />
                        <AppTextInput
                            value={this.state.address}
                            onChangeText={(val) => this.inputValueUpdate(val, 'address')}
                            leftIcon="city"
                            placeholder="Enter Address"
                            autoCapitalize="words"
                            keyboardType="default"
                            textContentType="familyName"
                        />
                        <Button success style={styles.buttonStyle} title="Submit" 
                            onPress={() => this.props.navigation.navigate('DoctorConfirmChanges')}>
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
});
