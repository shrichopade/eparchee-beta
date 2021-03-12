import React from 'react';
import { SafeAreaView, View, Image, StyleSheet } from 'react-native';
import { Button, Card, CardItem, Text } from 'native-base';

import pageStyles from '../../common/PageStyle.js';
import PatientFooter from '../PatientFooter';
import AppTextInput from '../../../components/AppTextInput';

export default class ManageDoctors extends React.Component {

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
                        <Text style={styles.pageTitle}>MANAGE MY DOCTORS</Text>
                        <View style={styles.cardRowStyle}>
                            <Card style={styles.cardStyle}>
                                <CardItem body bordered style={styles.cardHeader}>
                                    <View style={styles.cardHeaderContainer}>
                                        <Image
                                            source={
                                                require('../../../../assets/images/drprofile.png')
                                            }
                                            style={styles.profileImage}
                                        />
                                        <Text style={styles.level0Text}>Dr Santosh Pote</Text>
                                    </View>
                                </CardItem>
                                <CardItem body bordered style={styles.cardBody}>
                                    <View style={styles.cardBodyContainer}>
                                        <Text style={styles.level1Text}>Pote Clinic, Pune</Text>
                                        <Text style={styles.level2Text}>M - 9876545678</Text>
                                        <Text style={styles.level2Text}>E - poteclinic@gmail.com</Text>
                                    </View>
                                </CardItem>
                                <CardItem footer bordered style={styles.cardBody}>
                                    <View style={styles.cardFooterContainer}>
                                        <Image
                                            source={
                                                require('../../../../assets/images/remove-item.png')
                                            }
                                            style={styles.addRemoveImage}
                                        />
                                        <Image
                                            source={
                                                require('../../../../assets/images/add-to-fav.png')
                                            }
                                            style={styles.addRemoveImage}
                                        />
                                    </View>
                                </CardItem>
                            </Card>
                            <Card style={styles.cardStyle}>
                                <CardItem body bordered style={styles.cardHeader}>
                                    <View style={styles.cardHeaderContainer}>
                                        <Image
                                            source={
                                                require('../../../../assets/images/drprofile.png')
                                            }
                                            style={styles.profileImage}
                                        />
                                        <Text style={styles.level0Text}>Dr Rahul Joshi</Text>
                                    </View>
                                </CardItem>
                                <CardItem body bordered style={styles.cardBody}>
                                    <View style={styles.cardBodyContainer}>
                                        <Text style={styles.level1Text}>Joshi Hospital, Pune</Text>
                                        <Text style={styles.level2Text}>M - 8762345678</Text>
                                        <Text style={styles.level2Text}>E - r.joshi@gmail.com</Text>
                                    </View>
                                </CardItem>
                                <CardItem footer bordered style={styles.cardBody}>
                                    <View style={styles.cardFooterContainer}>
                                        <Image
                                            source={
                                                require('../../../../assets/images/remove-item.png')
                                            }
                                            style={styles.addRemoveImage}
                                        />
                                        <Image
                                            source={
                                                require('../../../../assets/images/fav-item.png')
                                            }
                                            style={styles.addRemoveImage}
                                        />
                                    </View>
                                </CardItem>
                            </Card>
                        </View>
                        <View style={styles.cardRowStyle}>
                            <Card style={styles.cardStyle}>
                                <CardItem body bordered style={styles.cardHeader}>
                                    <View style={styles.cardHeaderContainer}>
                                        <Image
                                            source={
                                                require('../../../../assets/images/drprofile.png')
                                            }
                                            style={styles.profileImage}
                                        />
                                        <Text style={styles.level0Text}>Dr Ram Nene</Text>
                                    </View>
                                </CardItem>
                                <CardItem body bordered style={styles.cardBody}>
                                    <View style={styles.cardBodyContainer}>
                                        <Text style={styles.level1Text}>Nene Hospital, Pune</Text>
                                        <Text style={styles.level2Text}>M - 9876545678</Text>
                                        <Text style={styles.level2Text}>E - rnene@yahoo.com</Text>
                                    </View>
                                </CardItem>
                                <CardItem footer bordered style={styles.cardBody}>
                                    <View style={styles.cardFooterContainer}>
                                        <Image
                                            source={
                                                require('../../../../assets/images/remove-item.png')
                                            }
                                            style={styles.addRemoveImage}
                                        />
                                        <Image
                                            source={
                                                require('../../../../assets/images/add-to-fav.png')
                                            }
                                            style={styles.addRemoveImage}
                                        />
                                    </View>
                                </CardItem>
                            </Card>
                            <Card style={styles.cardStyle}>
                                <CardItem body bordered style={styles.cardHeader}>
                                    <View style={styles.cardHeaderContainer}>
                                        <Image
                                            source={
                                                require('../../../../assets/images/patientprofile.png')
                                            }
                                            style={styles.profileImage}
                                        />
                                        <Text style={styles.level0Text}>Dr Sujata Sane</Text>
                                    </View>
                                </CardItem>
                                <CardItem body bordered style={styles.cardBody}>
                                    <View style={styles.cardBodyContainer}>
                                        <Text style={styles.level1Text}>SS Hospital, Pune</Text>
                                        <Text style={styles.level2Text}>M - 8762345678</Text>
                                        <Text style={styles.level2Text}>E - ssane@gmail.com</Text>
                                    </View>
                                </CardItem>
                                <CardItem footer bordered style={styles.cardBody}>
                                    <View style={styles.cardFooterContainer}>
                                        <Image
                                            source={
                                                require('../../../../assets/images/remove-item.png')
                                            }
                                            style={styles.addRemoveImage}
                                        />
                                        <Image
                                            source={
                                                require('../../../../assets/images/add-to-fav.png')
                                            }
                                            style={styles.addRemoveImage}
                                        />
                                    </View>
                                </CardItem>
                            </Card>
                        </View>
                        <Button success style={styles.buttonStyle} title="Submit" 
                            onPress={() => this.props.navigation.navigate('AddNewDoctor')}>
                            <Text style={styles.buttonText}>Add New Doctor</Text>
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
        marginBottom: 2,
        fontWeight: 'bold',
        backgroundColor: '#93cf96'
    },
    cardRowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardStyle: {
        width: '50%',
    },
    cardHeader: {
        marginVertical: 1,
        marginBottom: 1,
        backgroundColor: '#C8E7C9',
    },
    cardHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardBody: {
        marginVertical: 1,
        marginBottom: 1,
        backgroundColor: '#E4F3E4',
    },
    cardBodyContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    cardFooterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        marginLeft: 0,
    },
    addRemoveImage: {
        width: 25,
        height: 25,
        borderRadius: 25 / 2,
        marginLeft: 0,
    },
    level0Text: {
        fontFamily: 'Arial',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 0,
        marginBottom: 0,
        flex: 1, 
        flexWrap: 'wrap',
    },
    level1Text: {
        fontFamily: 'Arial',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 0,
        marginRight: 2,
        marginBottom: 5,
        flexShrink: 1,
        flexWrap: 'wrap',
    },
    level2Text: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: '400',
        marginLeft: 0,
        marginRight: 2,
        marginBottom: 5,
        flexShrink: 1,
        flexWrap: 'wrap',
    },
    buttonStyle: {
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
        width: '50%'
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
        textTransform: 'uppercase'
    },
});
