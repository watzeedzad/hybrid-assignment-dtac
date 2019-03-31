//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import BackTitleBar from '../components/Utils/BackTitleBar';

// create a component
class PreviousUsage extends Component {
    
    _onPress() {
        Actions.usage()
    }

    render() {
        return (
            <View style={styles.container}>
                <BackTitleBar
                    onPress={() => this._onPress()}
                    titleText={'Previous Usage'}
                />
                <Text> Previous Usage </Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default PreviousUsage;
