import React, { Component } from 'react'
import { Text,View, StyleSheet, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-banner-carousel';
import { Font, AppLoading } from 'expo';

const images = [
    require('../../assets/rewards/banner/banner1.jpg'),
    require('../../assets/rewards/banner/banner2.jpg'),
    require('../../assets/rewards/banner/banner3.jpg'),
    require('../../assets/rewards/banner/banner4.jpg'),
    require('../../assets/rewards/banner/banner5.jpg'),
]

export class SlideShowReward extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fontLoaded: false
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'kanit-light': require('../../assets/fonts/Kanit/Kanit-Light.ttf')
        });
        this.setState({ fontLoaded: true });
    }

    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={styles.image} source={image} />
            </View>
        );
    }

    render() {

        if (!this.state.fontLoaded) {
            return <AppLoading />
        }

        return (
            <Carousel
                autoplay
                autoplayTimeout={5000}
                loop
                index={0}
            >
                {images.map((image, index) => this.renderPage(image, index))}
            </Carousel>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.3,
        resizeMode: 'contain',
    },
    titleText: {
        fontFamily: 'kanit-light',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default SlideShowReward
