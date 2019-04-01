//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, ScrollView } from 'react-native';
import TitleBar from '../components/Utils/TitleBar';
import { Actions } from 'react-native-router-flux';
import { Font, AppLoading } from 'expo';
import OutstandingCard from '../components/Usage/OutstandingCard';
import EstimateCard from '../components/Usage/EstimateCard';
import PackageHistoryCard from '../components/Usage/PackageHistoryCard';
import NewsCard from '../components/Usage/NewsCard';
import MainPackageCard from '../components/Usage/MainPackageCard';

// create a component
class Usage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            'kanit-light': require('../assets/fonts/Kanit/Kanit-Light.ttf')
        });
        this.setState({ fontLoaded: true });
    }

    _onPress() {
        Actions.previousUsage();
    }

    render() {

        if (!this.state.fontLoaded) {
            return <AppLoading />
        }

        return (
            <View style={styles.container}>
                <TitleBar titleText={'Usage'} />
                <ScrollView>
                    <ImageBackground
                        style={styles.image}
                        source={require("../assets/usage/usageHeader.jpg")}
                    >
                        <Text style={styles.textHeader}>Last update : 23-Mar-19 22:30</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 8 }}>
                            <View style={{ width: 70, height: 18, backgroundColor: '#E8E8E8', }}>
                                <Text style={styles.postpaid}>POSTPAID</Text>
                            </View>
                            <Text style={styles.textSubheader}> 086-998-6096</Text>
                        </View>
                    </ImageBackground>

                    {/* <Text onPress={() => Actions.previousUsage()}> UsageContent </Text> */}
                    <OutstandingCard />

                    <EstimateCard />

                    <MainPackageCard />

                    <PackageHistoryCard />

                    <NewsCard />

                    <Text style={styles.link}>Check your previous call detail of the last 7 days</Text>
                    <Text style={styles.link} onPress={() => this._onPress()}>Check your previous usage of the last 3 months</Text>
                </ScrollView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.1245,
        resizeMode: 'contain',
    },
    textHeader: {
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'kanit-light',
        color: '#F0F0F0'
    },
    textSubheader: {
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'kanit-light',
        color: 'white'
    },
    postpaid: {
        fontSize: 13,
        color: 'gray',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'kanit-light',

    },
    link: {
        margin: 5,
        textAlign: 'center',
        fontSize: 11,
        color: '#00CDFF',
        textDecorationLine: 'underline'
    }
});

//make this component available to the app
export default Usage;
