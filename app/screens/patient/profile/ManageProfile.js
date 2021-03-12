import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base';

import pageStyles from '../../common/PageStyle.js';
import PatientFooter from '../PatientFooter';

export default class ManageProfile extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <SafeAreaView  style={pageStyles.container}>
                <View style={pageStyles.screen}>
                    <View style={pageStyles.body}>
                        <Text style={styles.pageTitle}>MANAGE PROFILE</Text>
                        <Button success iconLeft style={styles.buttonStyle}
                            onPress={() => this.props.navigation.navigate('PatientManagePersonalInfo')}>
                            <Icon name='person' />
                            <Text style={styles.buttonText}>Manage Personal Info</Text>
                        </Button>
                        <Button success iconLeft style={styles.buttonStyle}
                            onPress={() => this.props.navigation.navigate('ManageDoctors')}>
                            <Icon name='medkit' />
                            <Text style={styles.buttonText}>Manage Doctors</Text>
                        </Button>
                        <Button success iconLeft style={styles.buttonStyle}
                            onPress={() => this.props.navigation.navigate('ManageChemists')}>
                            <Icon name='paw' />
                            <Text style={styles.buttonText}>Manage Chemist</Text>
                        </Button>
                        <Button warning iconLeft style={styles.buttonStyle}
                            onPress={() => this.props.navigation.navigate('PatientChangePassword')}>
                            <Icon name='keypad' />
                            <Text style={styles.buttonText}>Change Password</Text>
                        </Button>
                        <Button primary iconLeft style={styles.buttonStyle}
                            onPress={() => this.props.navigation.navigate('PatientManageSettings')}>
                            <Icon name='settings' />
                            <Text style={styles.buttonText}>Manage Settings</Text>
                        </Button>
                        <Button danger iconLeft style={styles.buttonStyle}
                            onPress={() => this.props.navigation.navigate('SignIn')}>
                            <Icon name='navigate' />
                            <Text style={styles.buttonText}>Log out</Text>
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
