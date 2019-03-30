//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import TitleBar from '../components/Utils/TitleBar';
import { Font, AppLoading } from 'expo';
import UserInfo from '../components/Other/UserInfo';
import UserMenuItem from '../components/Other/UserMenuItem';
import Logout from '../components/Other/Logout';

const data = [
    {
        id: 0,
        iconImage: require('../assets/other/usageDetail.png'),
        text: 'Usage Details'
    },
    {
        id: 1,
        iconImage: require('../assets/other/payment.png'),
        text: 'Payment & Invoice'
    },
    {
        id: 2,
        iconImage: require('../assets/other/refill.png'),
        text: 'Refill for dtac number'
    },
    {
        id: 3,
        iconImage: require('../assets/other/interServices.png'),
        text: 'International Service'
    },
    {
        id: 4,
        iconImage: require('../assets/other/serviceCenter.png'),
        text: 'Service Centers & Queue'
    },
    {
        id: 5,
        iconImage: require('../assets/other/help.png'),
        text: 'Help & Feedback'
    },
    {
        id: 6,
        iconImage: require('../assets/other/setting.png'),
        text: 'Setting'
    },
]

// create a component
class Other extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fontLoaded: false
        }
    }


    async componentDidMount() {
        await Font.loadAsync({
            'kanit-light': require('../assets/fonts/Kanit/Kanit-Light.ttf')
        });
        this.setState({ fontLoaded: true });
    }

    renderItem = ({item}) => {
        return(
            <UserMenuItem
                iconImage={item.iconImage}
                text={item.text}
                onPress={() => this._onPress(item.id)}
            />
        )
    }

    keyExtractor = ({id}) => id.toString();

    _onPress = (id) => {
        console.log(id);
    }

    _onPressLogout = () => {
        console.log('logout')
    }

    render() {
        if (!this.state.fontLoaded) {
            return <AppLoading/>
        }
        return (
            <View style={styles.container}>
                <TitleBar titleText={'Other'}/>
                <UserInfo
                    userIcon={require('../assets/other/userIcon.png')}
                    name={'จิรวัฒน์ บุญสำเร็จ'}
                    type={'dtac postpaid'}
                    tel={'086-998-6096'}
                />
                <View>
                    <FlatList
                        data={data}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}
                    />
                </View>
                <View style={styles.logout}>
                <Logout
                    onPressLogout={() => {this._onPressLogout()}}
                />
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#E8E8E8',
    },
    logout: {
        flex: 1,
        justifyContent: 'center',
    }
});

//make this component available to the app
export default Other;
