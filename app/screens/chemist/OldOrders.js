import React from 'react';
import { SafeAreaView, View, Text, FlatList, Image,
    TouchableHighlight, StyleSheet } from 'react-native';

import pageStyles from '../common/PageStyle.js'
import ChemistFooter from './ChemistFooter'
import order_data from './data/OldOrdersData';

export default class OldOrders extends React.Component {

    constructor() {
        super();
    }

    renderOrder = ({item}) => {
        return (
          <TouchableHighlight underlayColor="#ccc" onPress={() => {
                this.props.navigation.navigate('OldOrderDetails')
            }} style={styles.listItem}
          >
            <View key={item.key} style={styles.rootContainer}>
                <View style={styles.itemContainer}>
                    <View style={styles.nameContainer}>
                        <Image source={item.status_image} resizeMode='contain'
                                style={styles.statusImage} />
                        <Text style={styles.statusText}>{item.status}</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.patientText}>{item.patient}</Text>
                        <Text style={styles.doctorText}>{item.doctor}</Text>
                        <Text style={styles.dueDateText}>{item.due_date}</Text>
                    </View>
                </View>
                <Image source={require('../../../assets/images/show-more.png')} 
                        style={styles.moreImage} />
            </View>
          </TouchableHighlight>
        );
    }

    render() {
        return (
            <SafeAreaView  style={pageStyles.container}>
                <View style={pageStyles.screen}>
                    <View style={pageStyles.body}>
                        <Text style={styles.listItemHeader}>ARCHIVED ORDERS</Text>
                        <FlatList data={order_data.filter(renderOrder => renderOrder !== null)} 
                            renderItem={this.renderOrder}/>                  
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
    rootContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemContainer: {
        flexDirection: 'row'
    },
    nameContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    listItemHeader: {
        padding: 10,
        fontSize: 20,
        marginTop: 10,
        marginBottom: 5,
        fontWeight: 'bold',
        backgroundColor: '#a1a1a1'
    },
    listItem: {
      padding: 10,
      backgroundColor: '#d2d2d2',
      borderBottomWidth: 5,
      borderBottomColor: '#f3f3f3'
    },
    statusImage: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginLeft: 5,
        marginRight: 5,
        alignSelf: 'center'
    },
    statusText: {
        fontFamily: 'Arial',
        fontSize: 10,
        fontWeight: '400',
        marginLeft: 5,
        marginRight: 5,
        alignSelf: 'center'
    },
    patientText: {
        fontFamily: 'Arial',
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 15,
        marginRight: 5,
        marginVertical: 3,
        marginBottom: 5
    },
    doctorText: {
        fontFamily: 'Arial',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 15,
        marginRight: 5,
        marginBottom: 5,
    },
    dueDateText: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: '400',
        marginLeft: 15,
        marginRight: 5
    },
    moreImage: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        marginLeft: 15,
        marginRight: 5,
        alignSelf: 'center'
    },
});