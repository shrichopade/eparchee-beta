import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import pageStyles from './PageStyle.js'

export default class PageTemplate extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <SafeAreaView  style={pageStyles.container}>
                <View style={pageStyles.screen}>
                    <View style={pageStyles.body}>
                        
                    </View>
                    <View style={pageStyles.footer}>

                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
