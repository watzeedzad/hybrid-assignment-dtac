import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, CheckBox } from 'react-native'
import { Card } from 'react-native-paper'

export class InvoiceTab extends Component {
    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 0.4, flexDirection: 'row' }}>
                        <Text style={{ color: 'gray', marginLeft: 20 }}>dtac Trinet invoice</Text>
                    </View>
                    <View style={{ flex: 0.55, flexDirection: 'row-reverse' }} >
                        <Text style={{ color: 'gray' }}>จิรวัฒน์ บุญสำเร็จ</Text>
                    </View>
                </View>
                <Card style={styles.card} elevation={0}>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <CheckBox
                            onChange={this.props.onChange}
                            value={this.props.checked}
                        />
                        <View style={{ flex: 0.5, marginLeft: 15 }}>
                            <Text style={{ fontSize: 13 }}>February 2019</Text>
                            <Text style={{ fontSize: 10 }}>Duedate 10/04/2019</Text>
                        </View>
                        <View style={{ flex: 0.4, flexDirection: 'row-reverse' }} >
                            <Text style={{ fontSize: 15 }}>373.43 Baht</Text>
                        </View>
                    </View>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: Dimensions.get('window').width * 0.95,
        height: 50,
        paddingLeft: 20,
        marginTop: 15,
        borderColor: 'gray',
        borderWidth: 1,
        alignSelf: 'center'
    },
});

export default InvoiceTab
