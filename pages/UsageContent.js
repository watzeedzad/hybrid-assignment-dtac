//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TitleBar from '../components/Utils/TitleBar';
import { Actions } from 'react-native-router-flux';

// create a component
class UsageContent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TitleBar titleText={'Usage'}/>
                <Text onPress={() => Actions.previousUsage()}> UsageContent </Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default UsageContent;
