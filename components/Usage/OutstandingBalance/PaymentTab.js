import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, TextInput } from 'react-native'
import { Button } from 'native-base'

export class PaymentTab extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Button style={this.props.buttonSelect == 'me' ?
                        styles.buttonOnselected : styles.button}
                        onPress={this.props.buttonOnPress}>
                        <Text style={this.props.buttonSelect == 'me' ? styles.textOnSelected : styles.text}>Pay for my number</Text>
                    </Button>
                    <Button style={this.props.buttonSelect == 'other' ?
                        styles.buttonOnselected : styles.button}
                        onPress={this.props.buttonOnPress} >
                        <Text style={this.props.buttonSelect == 'other' ? styles.textOnSelected : styles.text}>Pay for other</Text>
                    </Button>
                </View>
                <TextInput
                    style={styles.phone}
                    onChangeText={(phoneNumber) => this.props.onChangeText(phoneNumber)}
                    value={this.props.phoneNumber}
                    editable={this.props.buttonSelect == 'me' ? false : true}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    phone: {
        paddingLeft: 20,
        fontSize: 30,
        color: '#00CDFF',
        fontWeight: 'bold',
        marginTop: 15,
        backgroundColor: '#ffffff',
        height: 55,
        width: Dimensions.get('window').width * 0.95,
        borderColor: '#00CDFF',
        borderWidth: 2
    },
    button: {
        width: Dimensions.get('window').width * 0.45,
        height: 33,
        borderWidth: 2,
        borderColor: '#00CDFF',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
    },
    buttonOnselected: {
        width: Dimensions.get('window').width * 0.45,
        height: 33,
        borderWidth: 2,
        borderColor: '#00CDFF',
        backgroundColor: '#00CDFF',
        justifyContent: 'center',
    },
    text: {
        color: '#00CDFF'
    },
    textOnSelected: {
        color: '#ffffff'
    }
});

export default PaymentTab
