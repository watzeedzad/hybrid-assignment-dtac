import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, TextInput } from 'react-native'


export class AmountTab extends Component {
    render() {
        return (
            <View>
                <Text style={{ color: 'gray', marginLeft: 20 }}>Payment amount (Baht)</Text>
                <TextInput
                    style={styles.amount}
                    onChangeText={(amount) => this.props.onAmountChange(amount)}
                    value={this.props.amount}
                    editable={this.props.checked === true ? false : true}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    amount: {
        paddingLeft: 20,
        fontSize: 30,
        color: '#FF00FF',
        fontWeight: 'bold',
        marginTop: 5,
        backgroundColor: '#ffffff',
        height: 55,
        width: Dimensions.get('window').width * 0.95,
        borderColor: '#00CDFF',
        borderWidth: 2,
        alignSelf: 'center'
    },
});

export default AmountTab
