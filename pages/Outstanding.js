import React, { Component } from 'react'
import { View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';
import BackTitleBar from '../components/Utils/BackTitleBar';
import { Font, AppLoading } from 'expo';
import PaymentTab from '../components/Usage/OutstandingBalance/PaymentTab'
import InvoiceTab from '../components/Usage/OutstandingBalance/InvoiceTab';
import AmountTab from '../components/Usage/OutstandingBalance/AmountTab';

export class Outstanding extends Component {
    constructor(props) {
        super(props)

        this.state = {
            buttonSelect: 'me',
            phoneNumber: '086-998-6096',
            amount: '373.43',
            checked: true
        };
        this.buttonOnPress = this.buttonOnPress.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
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

    buttonOnPress() {
        if (this.state.buttonSelect === 'me') {
            this.setState({ buttonSelect: 'other', phoneNumber: '', checked: false, amount: '0.00' })
        } else {
            this.setState({ buttonSelect: 'me', phoneNumber: '086-998-6096', checked: true, amount: '373.43' })
        }
    }

    onChangeText(phoneNumber) {
        this.setState({ phoneNumber: phoneNumber })
    }

    onChange() {
        if (this.state.checked === true) {
            this.setState({ checked: false, amount: '' })
        } else {
            this.setState({ checked: true, amount: '373.43' })
        }
    }

    onAmountChange(amount) {
        this.setState({ amount: amount })
    }

    render() {

        if (!this.state.fontLoaded) {
            return <AppLoading />
        }

        return (
            <View style={styles.container}>
                <BackTitleBar
                    onPress={() => this._onPress()}
                    titleText={'Previous Usage'}
                />
                <ScrollView>
                    <Image
                        style={styles.banner}
                        source={require("../assets/usage/outstanding/banner.jpg")}
                    />
                    <View style={styles.buttonPanel}>
                        <View style={{ flex: 1 }}>
                            <Image
                                style={{ height: 30 }}
                                source={require("../assets/usage/outstanding/button1.jpg")}
                            />
                        </View>
                        <View style={{ flex: 1, marginLeft: 15 }}>
                            <Image
                                style={{ height: 30 }}
                                source={require("../assets/usage/outstanding/button2.jpg")}
                            />
                        </View>
                        <View style={{ flex: 2, marginLeft: 15 }}>
                            <Image
                                style={{ height: 30 }}
                                source={require("../assets/usage/outstanding/button3.jpg")}
                            />
                        </View>
                    </View>

                    <View style={styles.paymentContainer}>
                        <PaymentTab
                            buttonOnPress={this.buttonOnPress}
                            phoneNumber={this.state.phoneNumber}
                            buttonSelect={this.state.buttonSelect}
                            onChangeText={this.onChangeText}
                        />
                    </View>

                    {this.state.buttonSelect == 'me' ?
                        <View style={{ marginTop: 15 }}>
                            <InvoiceTab
                                checked={this.state.checked}
                                onChange={this.onChange}
                            />
                        </View>
                        : null}

                    <View style={{ marginTop: 15 }}>
                        <AmountTab
                            onAmountChange={this.onAmountChange}
                            amount={this.state.amount}
                            checked={this.state.checked}
                        />
                    </View>

                    <Image
                        style={{ marginTop: 15, alignSelf: 'center' }}
                        source={require("../assets/usage/outstanding/footer.jpg")}
                    />
                </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    paymentContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.18,
        backgroundColor: '#E8E8E8',
        alignItems: 'center'
    },
    buttonPanel: {
        margin: 10,
        flexDirection: 'row',
    },
    paymentContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.18,
        backgroundColor: '#E8E8E8',
        alignItems: 'center'
    },
    banner: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.066,
        alignSelf: 'center',
        resizeMode: 'contain',
    }
});

export default Outstanding
