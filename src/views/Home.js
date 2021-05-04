import React from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';

import { withNavigation } from 'react-navigation';

import Product from '../components/Product';

class HomeScreen extends React.Component {

        render() {
    };
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    col: {
        flex: 1,
    },
});

export default withNavigation(Product);