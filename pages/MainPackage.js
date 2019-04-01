import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'
import { Font, AppLoading } from 'expo';
import BackTitleBar from '../components/Utils/BackTitleBar';
import { Actions } from 'react-native-router-flux';

export class MainPackage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        };
    };

    async componentDidMount() {
        await Font.loadAsync({
            'kanit-light': require('../assets/fonts/Kanit/Kanit-Light.ttf')
        });
        this.setState({ fontLoaded: true });
    }

    _onPress() {
        Actions.usage()
    }
    render() {

        if (!this.state.fontLoaded) {
            return <AppLoading />
        }

        return (
            <View style={styles.container}>
                <BackTitleBar
                    onPress={() => this._onPress()}
                    titleText={'Main Package'}
                />
                <View style={styles.header}>
                    <Text style={styles.textHeader}> CURRENT PACKAGE </Text>
                </View>
                <View style={styles.content}>
                    <Text style={{ fontSize: 15, marginLeft: 8, marginBottom: 10 }}>Super Non-Stop_UP 349B.Net Always On 10GB,Free Call200min</Text>

                    <View style={styles.lineContent}>
                        <Image source={require('../assets/usage/circle.jpg')} />
                        <Text style={styles.text}>Valid till 23:59 17-Oct-19</Text>
                    </View>

                    <View style={styles.lineContent}>
                        <Image source={require('../assets/usage/circle.jpg')} />
                        <View style={{ flex: 0.5}}>
                            <Text style={styles.text}>Rollover (From last cycle)</Text>
                        </View>
                        <View style={{ flex: 0.45, flexDirection: 'row-reverse' }} >
                            <Text style={styles.text}>9.01 GB</Text>
                        </View>
                    </View>

                    <View style={styles.lineContent}>
                        <Image source={require('../assets/usage/circle.jpg')} />
                        <View style={{ flex: 0.5}}>
                            <Text style={styles.text}>Call to all networks Remaining</Text>
                        </View>
                        <View style={{ flex: 0.45, flexDirection: 'row-reverse' }} >
                            <Text style={styles.text}>189 min(s)</Text>
                        </View>
                    </View>

                    <View style={styles.lineContent}>
                        <Image source={require('../assets/usage/circle.jpg')} />
                        <View style={{ flex: 0.5 }}>
                            <Text style={styles.text}>Free Internet(MB) Remaining</Text>
                        </View>
                        <View style={{ flex: 0.45, flexDirection: 'row-reverse' }} >
                            <Text style={styles.text}>19.01 GB</Text>
                        </View>
                    </View>
                    <Image style={{ width: Dimensions.get('window').width * 0.95, marginBottom: 15, alignSelf: 'center' }}
                        source={require('../assets/usage/rolloverGuage.jpg')} />

                    <Text style={{ fontSize: 15, marginLeft: 8, marginBottom: 10 }}>Main unlimited package</Text>

                    <View style={styles.lineContent}>
                        <Image source={require('../assets/usage/circle.jpg')} />
                        <View style={{ flex: 0.5 }}>
                            <Text style={styles.text}>Usage</Text>
                        </View>
                        <View style={{ flex: 0.45, flexDirection: 'row-reverse' }} >
                            <Text style={styles.text}>0 MB / 10 GB</Text>
                        </View>
                    </View>
                    <Image style={{ width: Dimensions.get('window').width * 0.85, marginBottom: 15, alignSelf: 'center' }}
                        source={require('../assets/usage/usageGuage.jpg')} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FAFAFA',
    },
    header: {
        flex: 0.07,
        backgroundColor: '#EFEFF4',
        justifyContent: 'center'
    },
    textHeader: {
        marginLeft: 8,
        fontSize: 15,
        color: 'gray',
        fontWeight: 'bold',
        fontFamily: 'kanit-light',
    },
    content: {
        flex: 0.4,
        backgroundColor: '#FFFFFF',
        padding: 7
    },
    text: {
        fontSize: 12, 
        marginLeft: 8,
        fontFamily: 'kanit-light',
    },
    lineContent: {
        flexDirection: 'row', 
        marginLeft: 8, 
        marginBottom: 15
    }

});

export default MainPackage
