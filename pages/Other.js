//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TitleBar from '../components/Utils/TitleBar';

// create a component
class MyClass extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TitleBar titleText={'Other'}/>
                <Text>MyClass</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MyClass;
