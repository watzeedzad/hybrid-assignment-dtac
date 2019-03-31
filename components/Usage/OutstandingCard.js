import React, { Component } from 'react'
import { Card } from 'react-native-paper'
import { View, Text, StyleSheet, Image } from 'react-native';

export class OutstandingCard extends Component {
    render() {
        return (
            <Card style={styles.container} elevation={5}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require("../../assets/usage/outstanding.jpg")}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>OUTSTANDING BALANCE</Text>
                        <View style={{ flexDirection: 'row', marginBottom: 5}}>
                            <Text style={styles.price}>373.43</Text>
                            <Text style={{ fontSize: 22, color: 'lightgray' }}> Baht</Text>
                        </View>
                        <Text style={styles.duedate}>Due date 10-Apr-19</Text>
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
        marginBottom: 5,
        fontSize: 19,
        textAlign: 'left',
        fontFamily: 'kanit-light',
    },
    price: {
        fontSize: 22,
        // textAlign: 'left',
        color: '#FF0000',
        fontWeight: 'bold'
    },
    duedate: {
        fontSize: 13,
        textAlign: 'left',
        fontFamily: 'kanit-light',
    }
});

export default OutstandingCard
