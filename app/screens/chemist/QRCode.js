import React from 'react';
import { SafeAreaView, View,Text, 
   StyleSheet, Image } from 'react-native';
import { Button } from 'native-base';

import pageStyles from '../common/PageStyle.js'
import ChemistFooter from './ChemistFooter'


export default class QRCode extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <SafeAreaView  style={pageStyles.container}>
                <View style={pageStyles.screen}>
                    <View style={pageStyles.body}>
                        <Text style={styles.listItemHeader}>Scan QR Code</Text>
                        <Image source={require("../../../assets/images/qrcode.png")} 
                            resizeMode='contain'
                            style={styles.qrImage} />    
                        <Button primary style={styles.buttonStyle} title="Submit" 
                                onPress={() => this.props.navigation.navigate('ChemistHome')}>
                                <Text style={styles.buttonText}>Back</Text>
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
    listItemHeader: {
        padding: 10,
        fontSize: 20,
        marginTop: 10,
        marginBottom: 5,
        fontWeight: 'bold',
        backgroundColor: '#93cf96'
    },
    qrImage: {
        width: 375,
        height: 375,
        borderRadius: 40 / 2,
        marginLeft: 15,
        marginRight: 5,
        borderColor: '#a1a1a1',
        alignSelf: 'center'
    },
    buttonStyle: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
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