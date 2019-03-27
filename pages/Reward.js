//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import TitleBar from '../components/Utils/TitleBar';
import { Font, AppLoading } from 'expo';
import SlideShowReward from '../components/Reward/SlideShowReward';
import RewardList from '../components/Reward/RewardList'

const header = [
    { id: 0, image: require("../assets/rewards/header/header1.jpg") },
    { id: 1, image: require("../assets/rewards/header/header2.jpg") },
    { id: 2, image: require("../assets/rewards/header/header3.jpg") },
    { id: 3, image: require("../assets/rewards/header/header4.jpg") }
]

class Reward extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            'niramit-regular': require('../assets/fonts/Niramit-Regular.ttf')
        });
        this.setState({ fontLoaded: true });
    }

    renderItem = ({ item }) => {
        return (
            <RewardList headerImg={item.image}/>           
        )
    }

    render() {

        if (!this.state.fontLoaded) {
            return <AppLoading />
        }
        
        return (
            <View style={styles.container}>
                <TitleBar titleText={'Reward'} />
                <View style={styles.buttonPanel}>
                    <View style={{ flex: 2 }}>
                        <Image
                            style={{ height: 30, width: 120 }}
                            source={require("../assets/rewards/button1.jpg")}
                        />
                    </View>
                    <View style={{ flex: 2, marginLeft: 30 }}>
                        <Image
                            style={{ height: 30, width: 120 }}
                            source={require("../assets/rewards/button2.jpg")}
                        />
                    </View>
                    <View style={{ flex: 3 }}>
                    </View>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <SlideShowReward />
                    <FlatList
                        data={header}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </ScrollView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    buttonPanel: {
        margin: 8,
        flexDirection: 'row'
    }
});

//make this component available to the app
export default Reward;
