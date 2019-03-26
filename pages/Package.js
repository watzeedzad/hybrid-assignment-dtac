//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Image, ScrollView } from 'react-native';
import TopNavElement from '../components/Package/TopNavElement';
import TitleBar from '../components/Utils/TitleBar';
import { Font, AppLoading } from 'expo';
import Carousel from 'react-native-banner-carousel';
import { Card } from 'react-native-paper'

const BannerWidth = (Dimensions.get('window').width)*0.8;
const BannerHeight = 200;

const images = [
    require('../assets/package/banner/banner1.png'),
    require('../assets/package/banner/banner2.png'),
    require('../assets/package/banner/banner3.png'),
    require('../assets/package/banner/banner4.png'),
    require('../assets/package/banner/banner5.png'),
    require('../assets/package/banner/banner6.png'),
]

const topNavElementData = [
    {
        id: 0,
        iconPath: require('../assets/package/icon/packageHistory.png'),
        title: 'Package\nHistory'
    },
    {
        id: 1,
        iconPath: require('../assets/package/icon/volumeBooster.png'),
        title: 'Volume\nBooster'
    },
    {
        id: 2,
        iconPath: require('../assets/package/icon/speedBooster.png'),
        title: 'Speed\nBooster'
    },
    {
        id: 3,
        iconPath: require('../assets/package/icon/voice.png'),
        title: 'Voice\n'
    },
    {
        id: 4,
        iconPath: require('../assets/package/icon/chatSocial.png'),
        title: 'Chat &\nSocial'
    },
    {
        id: 5,
        iconPath: require('../assets/package/icon/mainPackage.png'),
        title: 'Main\nPackage'
    }
]

// create a component
class Package extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fontLoaded: false
        };
    };

    async componentDidMount() {
        await Font.loadAsync({
            'niramit-regular': require('../assets/fonts/Niramit-Regular.ttf')
        });
        this.setState({fontLoaded: true});
    }

    renderItem = ({item}) => {
        return (
            <TopNavElement
                iconPic={item.iconPath}
                titleText={item.title}
            />
            
        );
    }

    keyExtractor = ({id}) => id.toString();

    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={image}/>
            </View>
        );
    }

    render() {
        if (!this.state.fontLoaded) {
            return <AppLoading/>
        }
        return (
            <View style={styles.container}>
                <TitleBar titleText={'My menu'}/>
                <View style={styles.flatListHeight}>
                    <FlatList
                        data={topNavElementData}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}
                        horizontal={true}
                        style={{backgroundColor: '#ffffff'}}
                    />
                </View>
                <ScrollView style={styles.packageContent}>
                    <View style={styles.bannerContainer}>
                        <Carousel
                            autoplay
                            autoplayTimeout={5000}
                            loop
                            index={0}
                            pageSize={BannerWidth}
                        >
                            {images.map((image, index) => this.renderPage(image, index))}
                        </Carousel>
                    </View>
                    <View style={styles.textLabel}>
                        <Text style={[{fontSize: 18, fontFamily: 'niramit-regular'}]}> Recommended Add-On </Text>
                    </View>
                    <Card style={styles.card} elevation={3}>
                        <Text> Free calls any numbers 24 hrs for 10 days </Text>
                    </Card>
                    <View style={styles.textLabel}>
                        <Text style={[{fontSize: 18, fontFamily: 'niramit-regular'}]}> Top Hit </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    bannerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLabel: {
        flex: 2,
        paddingLeft: 50,
    },
    packageContent: {
        flex: 1,
        flexDirection: 'column',
    },
    flatListHeight: {
        height: 80
    },
    card: {
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 52,
        marginRight: 52,
        padding: 5
    },
    packageInfoLabel1: {
        flex: 1
    },
    packageInfoLabel2: {
        flex: 1,
        flexDirection: 'row'
    }
});

//make this component available to the app
export default Package;
