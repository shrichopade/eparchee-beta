import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { RadioButton, Text  } from 'react-native-paper';

import pageStyles from '../../common/PageStyle.js';
import PatientFooter from '../PatientFooter';
import AppTextInput from '../../../components/AppTextInput';
import AppDateTextMask from '../../../components/AppDateTextMask';

export default class ManagePersonalInfo extends React.Component {

    constructor() {
        super();
        this.state = {
            givenName: 'Neha',
            surname: 'Khare',
            username: 'neha.khare@gmail.com',
            mobileNumber: '7778823456',
            aadharCard: '',
            gender: 'F',
            dateOfBirth: '',
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
                        <Text style={styles.pageTitle}>PERSONAL INFO - Neha Khare</Text>
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
                        <RadioButton.Group onValueChange={(val) => this.inputValueUpdate(val, 'gender')} value={this.state.gender}>
                            <View style={styles.buttonParallel}>
                                <RadioButton value="M" />
                                <Text style={styles.radioText}>Male</Text>
                                <RadioButton value="F" />
                                <Text style={styles.radioText}>Female</Text>
                            </View>
                        </RadioButton.Group>
                        <AppDateTextMask
                            type={'datetime'}
                            leftIcon="file-code"
                            options={{format: 'DD/MM/YYYY'}}
                            value={this.state.dateOfBirth}
                            placeholder="Enter Date of Birth (DD/MM/YYYY)"
                            onChangeText={(val) => this.inputValueUpdate(val, 'dateOfBirth')}
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
                            onPress={() => this.props.navigation.navigate('PatientConfirmChanges')}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </Button>
                    </View>
                    <View style={pageStyles.footer}>
                        <PatientFooter navigation={this.props.navigation}/>
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
    buttonParallel: {
        flex: 0,
        flexDirection: 'row',
    },
    radioText: {
        fontFamily: 'Arial',
        fontSize: 16,
        color: '#808080'
    }
});
