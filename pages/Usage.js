//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import PreviousUsage from './PreviousUsage';
import UsageContent from './UsageContent';
import TitleBar from '../components/Utils/TitleBar';

// create a component
class Usage extends Component {
    _onPress() {
        this.props.navigation.navigate('PreviousUsage');
    }

    render() {
        return (
            <Router>
                <Scene key="root">
                {/* <TitleBar titleText={'Usage'}/> */}
                    <Scene key="usage"
                        component={UsageContent}
                        hideNavBar={true}
                        initial
                    />
                    <Scene key="previousUsage"
                        component={PreviousUsage}
                        hideNavBar={true}
                    />
                </Scene>
            </Router>
            // <View style={styles.container}>
            //     <TouchableOpacity
            //         onPress={() => this._onPress()}
            //     >
            //         <Text>Usage</Text>
            //     </TouchableOpacity>
            // </View>
        );
    }
}

// define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });

//make this component available to the app
export default Usage;
