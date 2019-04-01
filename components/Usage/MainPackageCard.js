import React, { Component } from 'react'
import { Card } from 'react-native-paper'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

export class MainPackageCard extends Component {

    _onPress() {
        Actions.mainPackage();
    }

    render() {
        return (
            <Card style={styles.container} elevation={5} onPress={() => this._onPress()}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require("../../assets/usage/mainPackage.jpg")}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>MAIN PACKAGE</Text>
                        <Text style={styles.text}>Super Non-Stop_UP 349B.Net Always On 10GB,Free Call200min</Text>
                    
                        <Text style={styles.text}>Remaining</Text>
                        <Image style={{width: Dimensions.get('window').width*0.8}} source={require('../../assets/usage/remaining.jpg')}/>

                        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                            <View style={{ flex: 0.5, flexDirection: 'row' }}>
                                <Text style={styles.text}>Rollover (From last cycle)</Text>
                            </View>
                            <View style={{ flex: 0.3, flexDirection: 'row-reverse' }} >
                                <Text style={styles.text}>9.01 GB</Text>
                            </View>
                        </View>
                        <Image style={{width: Dimensions.get('window').width*0.73}} source={require('../../assets/usage/rolloverGuage.jpg')}/>
                        
                        <Text style={styles.text}>Main unlimited package</Text>
                        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                            <View style={{ flex: 0.5, flexDirection: 'row' }}>
                                <Text style={{fontSize:14,color:'lightgray'}}>Usage</Text>
                            </View>
                            <View style={{ flex: 0.3, flexDirection: 'row-reverse' }} >
                                <Text style={{fontSize:14,color:'lightgray'}}>0 MB / 10 GB</Text>
                            </View>
                        </View>
                        <Image style={{width: Dimensions.get('window').width*0.73}} source={require('../../assets/usage/usageGuage.jpg')}/>

                    </View>
                </View>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        marginLeft: 10,
        marginRight: 10,
    },
    textContainer: {
        margin: 10
    },
    textHeader: {
        marginBottom: 7,
        fontSize: 19,
        textAlign: 'left',
        fontFamily: 'kanit-light',
    },
    text: {
        marginBottom: 5,
        fontSize: 14,
        textAlign: 'left',
        fontFamily: 'kanit-light',
    }
});

export default MainPackageCard
