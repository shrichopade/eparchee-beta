import React from 'react';
import { SafeAreaView, View, Text, FlatList, Image,
    TouchableHighlight, StyleSheet,swipeBtns } from 'react-native';
import { Button } from 'native-base';
import { Checkbox,RadioButton  } from 'react-native-paper';

import pageStyles from '../common/PageStyle';
import AppTextInput from '../../components/AppTextInput';

import DoctorFooter from './DoctorFooter';




export default class UpdateMedication extends React.Component {
      
      

    constructor() {
        super();
        this.state = {
            medication: 'Omeprezol',
            strength: '20 mg',
            dosage: '1-0-0',
            note: '20 mins before food'
            
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
                        <View  style={pageStyles.rootContainer}>
                            <Text style={styles.listItemHeader}>UPDATE MEDICATION</Text>
                            <AppTextInput
                            onChangeText={(val) => this.inputValueUpdate(val, 'medication')}
                            placeholder = "Omeprezol"
                            autoCapitalize="none"
                            keyboardType="default"
                            textContentType="default"/>
                             <AppTextInput
                            onChangeText={(val) => this.inputValueUpdate(val, 'strength')}
                            placeholder="20 mg"
                            autoCapitalize="none"
                            keyboardType="default"
                            textContentType="default"/>
                            <AppTextInput
                            onChangeText={(val) => this.inputValueUpdate(val, 'dosage')}
                            placeholder="1-0-0"
                            autoCapitalize="none"
                            keyboardType="default"
                            textContentType="default"/>
                             <AppTextInput
                            onChangeText={(val) => this.inputValueUpdate(val, 'note')}
                            placeholder="20 mins before any food"
                            autoCapitalize="none"
                            keyboardType="default"
                            textContentType="default"/>
                            <View style={styles.buttonContainer}>    
                                <Button danger style={styles.buttonStyle} title="Add" 
                                    onPress={() => this.props.navigation.navigate('Prescribe')}>
                                    <Text style={styles.buttonText}>Update</Text>
                                </Button>
                            </View>
                        </View>
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
    rootContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    rootContainerDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemContainer: {
        flexDirection: 'row',
    },
    nameContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginRight: 30,
    },
    listItemHeader: {
        padding: 10,
        fontSize: 20,
        marginTop: 10,
        marginBottom: 5,
        fontWeight: 'bold',
        backgroundColor: '#93cf96'
    },
    metadataItems: {
      padding: 10,
      backgroundColor: '#C8E7C9',
      borderBottomWidth: 5,
      borderBottomColor: '#f3f3f3'
    },
    orderDetailsItems: {
        padding: 5,
        backgroundColor: '#E4F3E4',
        borderBottomWidth: 5,
        borderBottomColor: '#f3f3f3'
    },
    labelTextLevel1: {
        fontFamily: 'Arial',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 15,
        marginRight: 5,
        marginVertical: 3,
        marginBottom: 3
    },
    labelTextLevel0: {
        fontFamily: 'Arial',
        fontSize: 22,
        fontWeight: '800',
        marginLeft: 15,
        marginRight: 5,
        marginVertical: 10,
        marginBottom: 10,
        color: "#FF3333",
    },
    labelTextLevel2: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: '400',
        marginLeft: 15,
        marginRight: 10,
        marginVertical: 3,
        marginBottom: 3
    },
    statusImage: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        marginLeft: 5,
        marginRight: 5,
        alignSelf: 'center'
    },
    statusText: {
        fontFamily: 'Arial',
        fontSize: 12,
        fontWeight: '400',
        marginLeft: 5,
        marginRight: 5,
        alignSelf: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'space-evenly'
    },
    buttonStyle: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: '20%'
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
        textTransform: 'uppercase'
    },
});