import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Button, Picker, Item, Icon } from 'native-base';

import pageStyles from '../../common/PageStyle.js';
import PatientFooter from '../PatientFooter';

export default class AddNewChemist extends React.Component {

    constructor() {
        super();
        this.state = {
          passcode: '',
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
                        <Text style={styles.pageTitle}>ADD NEW CHEMIST</Text>
                        <View style={styles.btnContainer}>  
                            <Text style={styles.labelText}>Select Chemist: </Text> 
                            <Item picker>
                                <Picker style={styles.dropdownStyle}
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined }}
                                    placeholder="Select"
                                    placeholderStyle={{ color: "#007aff" }}
                                    placeholderIconColor="#007aff"
                                >
                                    <Picker.Item label="Om Medical Store" value="Om Medical Store" />
                                    <Picker.Item label="Ramesh Medicals" value="Ramesh Medicals" />
                                    <Picker.Item label="Ramesh Medicals" value="Som Pharmacy" />
                                </Picker>
                            </Item> 
                        </View>   
                        <Button success style={styles.buttonStyle} title="Submit" 
                            onPress={() => this.props.navigation.navigate('ManageChemists')}>
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
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10,
        backgroundColor: '#C8E7C9',
        padding: 15,
    },
    labelText: {
        fontFamily: 'Arial',
        fontSize: 18,
        fontWeight: '400',
        marginLeft: 15,
        marginRight: 5,
        marginBottom: 2,
    },
    dropdownStyle: {
        height: 30, 
        width: '98%',
        alignSelf: 'center',
        marginVertical: 0,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 10,
        marginTop: 30,
        marginBottom: 30
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
