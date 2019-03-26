//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import TitleBar from '../components/Utils/TitleBar';
import { Font, AppLoading } from 'expo';

class Reward extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            'niramit-regular': require('../assets/fonts/Niramit-Regular.ttf')
        });
        this.setState({ fontLoaded: true });
    }
    render() {

        if (!this.state.fontLoaded) {
            return <AppLoading />
        }

        return (
            <View style={styles.container}>
                <TitleBar titleText={'Reward'} />
                <ScrollView>
                    <View style={styles.buttonPanel}>
                        <View style={{ flex: 2 }}>
                            <Image
                                style={{ height: 30, width: 120 }}
                                source={require("../assets/rewards/button1.jpg")}
                            />
                        </View>
                        <View style={{ flex: 2, marginLeft: 30 }}>
                            <Image
                                style={{ height: 30, width: 120 }}
                                source={require("../assets/rewards/button2.jpg")}
                            />
                        </View>
                        <View style={{ flex: 3 }}>
                        </View>
                    </View>
                    <View>
                        
                    </View>
                </ScrollView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    buttonPanel: {
        flex: 1,
        margin: 8,
        flexDirection: 'row'
    },
});

//make this component available to the app
export default Reward;
