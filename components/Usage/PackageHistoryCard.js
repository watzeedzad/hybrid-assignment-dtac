import React, { Component } from 'react'
import { Card } from 'react-native-paper'
import { View, Text, StyleSheet, Image } from 'react-native';

export class EstimateCard extends Component {
    render() {
        return (
            <Card style={styles.container} elevation={5}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require("../../assets/usage/packageHistory.jpg")}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>PACKAGE HISTORY</Text>
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
        margin: 9
    },
    textHeader: {
        marginBottom: 5,
        fontSize: 19,
        textAlign: 'left',
        fontFamily: 'kanit-light',
    }
});

export default EstimateCard
