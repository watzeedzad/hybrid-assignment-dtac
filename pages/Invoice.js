import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, FlatList } from 'react-native'
import BarChart from '../components/Usage/OutstandingBalance/Invoice/BarChart';
import InvoiceItem from '../components/Usage/OutstandingBalance/Invoice/InvoiceItem';
import { Actions } from 'react-native-router-flux';
import BackTitleBar from '../components/Utils/BackTitleBar';
import { Font, AppLoading } from 'expo';

const data = [{
    id: 0,
    month: 'February 2019',
    date: '18/02/2019 - 17/03/2019',
    price: '373.43 Baht'
},
{
    id: 1,
    month: 'January 2019',
    date: '18/01/2019 - 17/02/2019',
    price: '373.43 Baht'
},
{
    id: 2,
    month: 'December 2018',
    date: '18/12/2018 - 17/01/2019',
    price: '373.43 Baht'
},
{
    id: 3,
    month: 'November 2018',
    date: '18/11/2018 - 17/12/2018',
    price: '373.43 Baht'
},
{
    id: 4,
    month: 'October 2018',
    date: '18/10/2018 - 17/11/2018',
    price: '373.43 Baht'
}]

export class Invoice extends Component {
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
        Actions.outstanding()
    }

    renderItem = ({ item }) => {
        return (
            <InvoiceItem item={item} />
        )
    }

    render() {

        if (!this.state.fontLoaded) {
            return <AppLoading />
        }

        return (
            <View style={styles.container}>
                <BackTitleBar
                    onPress={() => this._onPress()}
                    titleText={'Invoice'}
                />
                <ScrollView>
                    <BarChart />
                    <FlatList
                        data={data}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    titleContainer: {
        flex: 0.1,
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
    }
});


export default Invoice
