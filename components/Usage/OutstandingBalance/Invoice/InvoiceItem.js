import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Button } from 'react-native'

export class InvoiceItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:0.5}}>
                    <Text style={styles.month}>{this.props.item.month}</Text>
                    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                        <Image source={require('../../../../assets/usage/outstanding/calendar.jpg')} />
                        <Text style={styles.date}>{this.props.item.date}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                        <Image source={require('../../../../assets/usage/outstanding/currency.jpg')} />
                        <Text style={styles.price}>{this.props.item.price}</Text>
                    </View>
                </View>
                <View style={{flex:0.4, flexDirection:'row-reverse'}}>
                    <Button title={'Download'}></Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgray'
    },
    month: {
        fontSize: 16,
        marginLeft: 5,
        marginBottom: 10,
        fontFamily: 'kanit-light',
        fontWeight: 'bold',
    },
    date: {
        fontSize: 13,
        color: 'gray'
    },
    price: {
        fontSize: 13,
        marginLeft: 5,
        color: 'gray'
    }
});
export default InvoiceItem
