import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';

import pageStyles from '../../common/PageStyle.js';
import ChemistFooter from '../ChemistFooter';
import AppTextInput from '../../../components/AppTextInput';


export default class ChangePassword extends React.Component {

    constructor() {
        super();
        this.state = {
          oldPassword: '',
          password: '',
          confirmPassword: ''
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
                        <Text style={styles.pageTitle}>CHANGE PASSWORD</Text>
                        <AppTextInput
                            value={this.state.passcode}
                            onChangeText={(val) => this.inputValueUpdate(val, 'oldPassword')}
                            leftIcon="file-code"
                            placeholder="Enter current password"
                            autoCapitalize="none"
                            keyboardType="phone-pad"
                            textContentType="oneTimeCode"
                            />
                        <AppTextInput
                            value={this.state.password}
                            onChangeText={(val) => this.inputValueUpdate(val, 'password')}
                            leftIcon="lock"
                            placeholder="Enter new password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                            textContentType="password"
                            />
                        <AppTextInput
                            value={this.state.confirmPassword}
                            onChangeText={(val) => this.inputValueUpdate(val, 'confirmPassword')}
                            leftIcon="lock"
                            placeholder="Confirm new password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                            textContentType="password"
                            />
                        <Button success style={styles.buttonStyle} title="Submit" 
                            onPress={() => this.props.navigation.navigate('ChemistConfirmChanges')}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </Button>
                    </View>
                    <View style={pageStyles.footer}>
                        <ChemistFooter navigation={this.props.navigation}/>
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

