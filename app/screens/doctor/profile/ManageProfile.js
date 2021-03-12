import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base';
import { Auth } from 'aws-amplify';

import pageStyles from '../../common/PageStyle.js';
import DoctorFooter from '../DoctorFooter';

export default class ManageProfile extends React.Component {

    constructor() {
        super();
    }

    signOut = async () => {
        try {
          await Auth.signOut();
          //updateAuthState('loggedOut');
          this.props.navigation.navigate('SignIn');
        } catch (error) {
          console.log('Error signing out: ', error);
        }
    }

    render() {
        return (
            <SafeAreaView  style={pageStyles.container}>
                <View style={pageStyles.screen}>
                    <View style={pageStyles.body}>
                        <Text style={styles.pageTitle}>MANAGE PROFILE</Text>
                        <Button success iconLeft style={styles.buttonStyle}
                            onPress={() => this.props.navigation.navigate('DoctorManagePersonalInfo')}>
                            <Icon name='person' />
                            <Text style={styles.buttonText}>Manage Personal Info</Text>
                        </Button>
                        <Button warning iconLeft style={styles.buttonStyle}
                            onPress={() => this.props.navigation.navigate('DoctorChangePassword')}>
                            <Icon name='keypad' />
                            <Text style={styles.buttonText}>Change Password</Text>
                        </Button>
                        <Button primary iconLeft style={styles.buttonStyle}
                            onPress={() => this.props.navigation.navigate('DoctorManageSettings')}>
                            <Icon name='settings' />
                            <Text style={styles.buttonText}>Manage Settings</Text>
                        </Button>
                        <Button danger iconLeft style={styles.buttonStyle}
                            onPress={() => this.signOut()}>
                            <Icon name='navigate' />
                            <Text style={styles.buttonText}>Log out</Text>
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
        marginBottom: 15,
        marginTop: 10,
        width: '80%'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textTransform: 'uppercase'
    },
});
