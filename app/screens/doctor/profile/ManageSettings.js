import React, {useState} from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Button, Picker, Item, Icon  } from 'native-base';

import pageStyles from '../../common/PageStyle.js';
import DoctorFooter from '../DoctorFooter';

export default class ManageSettings extends React.Component {


    constructor() {
        super();
        this.state = {
          passcode: '',
          selectedValue: 'java'
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
                        <Text style={styles.pageTitle}>MANAGE SETTINGS</Text>
                        <View style={styles.nameValueContainer}>
                            <Text style={styles.labelText}>Appointments Notifications on:</Text>
                            <Item picker>
                                <Picker style={styles.dropdownStyle}
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined }}
                                    placeholder="Select"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                >
                                    <Picker.Item label="Both" value="both" />
                                    <Picker.Item label="Mobile" value="mobile" />
                                    <Picker.Item label="Email" value="email" />
                                </Picker>
                            </Item>
                        </View>
                        <View style={styles.nameValueContainer}>
                            <Text style={styles.labelText}>Other Notifications on:</Text>
                            <Item picker>
                                <Picker style={styles.dropdownStyle}
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined }}
                                    placeholder="Select"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                >
                                    <Picker.Item label="Both" value="both" />
                                    <Picker.Item label="Mobile" value="mobile" />
                                    <Picker.Item label="Email" value="email" />
                                </Picker>
                            </Item>
                        </View>
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
    nameValueContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    labelText: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 15,
        marginRight: 10,
        marginVertical: 10,
        marginBottom: 10
    },
    dropdownStyle: {
        height: 30, 
        width: '98%',
        alignSelf: 'center',
        marginVertical: 0,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 10,
    }
});
