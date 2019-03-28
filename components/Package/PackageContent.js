//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

// create a component
class PackageContent extends Component {
    render() {
        return (
            <Card style={styles.card} elevation={3}>
                <Text style={styles.packageInfoLabel}> {this.props.packageTitle} </Text>
                <View style={styles.packageContentLabel}>
                    <View style={styles.packageContentItem1}>
                        <Text style={{textAlign: 'center', color: '#E71B8D', fontSize: 32}}> {this.props.packagePrice} </Text>
                        <Text style={{textAlign: 'center', fontSize: 10}}> {this.props.packageCurrency} </Text>
                    </View>
                    <View style={styles.packageContentItem2}>
                        <View style={styles.packageContentSubContainer}>
                            <Image source={require('../../assets/package/phone-512.png')} style={{width: 20, height: 20}}/>
                            <Text> {this.props.packageCallDuration} </Text>
                        </View>
                        <View style={styles.packageContentSubContainer}>
                            <Image source={require('../../assets/package/46.Calendar-512.png')} style={{width: 20, height: 20}}/>
                            <Text> {this.props.packageDays} </Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.packageDetailButton}
                    activeOpacity={0.5}
                >
                    <Text style={{color: '#ffffff', fontFamily: 'niramit-regular', textAlign: 'center', fontSize: 16}}> Detail </Text>
                </TouchableOpacity>
            </Card>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 52,
        marginRight: 52,
        padding: 5
    },
    packageInfoLabel: {
        flex: 1,
        fontSize: 14,
        fontFamily: 'niramit-regular'
    },
    packageContentLabel: {
        flex: 1,
        flexDirection: 'row',
        height: 120,
        // borderWidth: 1,
    },
    packageDetailButton: {
        marginTop: 2.5,
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#0091D2',
        borderRadius: 30,
        // borderWidth: 1,
        borderColor: '#fff'
    },
    packageContentItem1: {
        flex: 0.3,
        flexDirection: 'column',
        paddingTop: 30,
        fontFamily: 'niramit-regular',
        paddingLeft: 20,
    },
    packageContentItem2: {
        flex: 0.7,
        flexDirection: 'column',
        paddingLeft: 20,
        paddingTop: 38,
        fontFamily: 'niramit-regular',
    },
    packageContentSubContainer: {
        flexDirection: 'row',
    }
});

//make this component available to the app
export default PackageContent;
