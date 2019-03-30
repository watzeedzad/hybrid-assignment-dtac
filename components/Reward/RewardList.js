import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import { Font, AppLoading } from 'expo';

const recommendData = [
    {
        id: 0, image: require("../../assets/rewards/recommended/recommended1.jpg"),
        name: "Zen Restaurant",
        desc: "SILVER MEMBER customers buy Salmon Ebiko Aburi Sushi just 49 baht"
    },
    {
        id: 1, image: require("../../assets/rewards/recommended/recommended2.jpg"),
        name: "Siam Park City",
        desc: "Just 850.- for AMAZING Pass (from 900) + 100.- Cash Voucher"
    },
    {
        id: 2, image: require("../../assets/rewards/recommended/recommended3.jpg"),
        name: "Cafe Amazon",
        desc: "Get 10 baht discount for all drink."
    },
    {
        id: 3, image: require("../../assets/rewards/recommended/recommended4.jpg"),
        name: "Top Charoen",
        desc: "Get 5% discount on top from a promotional price (frames and lens)."
    },
]

export class RewardList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            'kanit-light': require('../../assets/fonts/Kanit/Kanit-Light.ttf')
        });
        this.setState({ fontLoaded: true });
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.rewardContainer}>
                <Image
                    style={styles.image}
                    source={item.image}
                />
                <Text style={styles.textName}>{item.name}</Text>
                <Text style={styles.textDesc}>{item.desc}</Text>
            </View>
        )
    }

    render() {

        if (!this.state.fontLoaded) {
            return <AppLoading />
        }

        return (
            <View>                
                <Image
                    style={styles.header}
                    source={this.props.headerImg}
                />
                <FlatList
                    horizontal={true}
                    data={recommendData}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width * 0.65,
        alignSelf: 'center',
        resizeMode: 'cover',
    },
    rewardContainer: {
        width: Dimensions.get('window').width * 0.65,
        margin: 3,
    },
    header: {
        width: Dimensions.get('window').width,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    textName: {
        marginTop: 7,
        fontSize: 15,
        color: '#66e0ff',
        textAlign: 'left',
        fontFamily: 'kanit-light',
        fontWeight: 'bold'
    },
    textDesc: {
        marginTop: 7,
        marginBottom: 7,
        fontSize: 15,
        textAlign: 'left',
        fontFamily: 'kanit-light',
    }
});

export default RewardList
