//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import TopNavElement from '../components/Package/TopNavElement';
import TitleBar from '../components/Utils/TitleBar';
import { Font, AppLoading } from 'expo';
import Carousel from 'react-native-banner-carousel';
import PackageContent from '../components/Package/PackageContent';

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

const recommendedAddOnData = [
    {
        id: 0,
        packageTitle: 'Free calls any number 24 hrs for 10 days',
        packagePrice: 99,
        packageCurrency: 'Baht',
        packageCallDuration: 'Unlimited',
        packageDays: '10 Days'
    },
    {
        id: 1,
        packageTitle: 'Free calls any number 200 mins for 30 days',
        packagePrice: 99,
        packageCurrency: 'Baht',
        packageCallDuration: '200 minutes',
        packageDays: '30 Days'
    },
    {
        id: 2,
        packageTitle: 'dtac Internet 4GB 49B for7days',
        packagePrice: 49,
        packageCurrency: 'Baht',
        packageCallDuration: '4 GB',
        packageDays: '7 Day'
    },
]

const topHitData = [
    {
        id: 0,
        packageTitle: 'YouTube and LINE TV 1GB for 5 days',
        packagePrice: 69,
        packageCurrency: 'Baht',
        packageCallDuration: '1 GB',
        packageDays: '5 Days'
    },
    {
        id: 1,
        packageTitle: 'Free calls 100 mins & dtac internet 1GB for 30 days',
        packagePrice: 99,
        packageCurrency: 'Baht',
        packageCallDuration: '1 GB and 100 minutes',
        packageDays: '30 Days'
    },
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
            'kanit-light': require('../assets/fonts/Kanit/Kanit-Light.ttf')
        });
        this.setState({ fontLoaded: true });
    }

    renderItem = ({item}) => {
        return (
            <TopNavElement
                iconPic={item.iconPath}
                titleText={item.title}
            />
            
        );
    }

    renderPackageItem = ({item}) => {
        // console.log(item);
        return (
            <PackageContent
                packageTitle={item.packageTitle}
                packagePrice={item.packagePrice}
                packageCurrency={item.packageCurrency}
                packageCallDuration={item.packageCallDuration}
                packageDays={item.packageDays}
            />
        )
    }

    keyExtractor = ({id}) => id.toString();

    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight, resizeMode: 'contain' }} source={image}/>
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
                        <Text style={[{fontSize: 18, fontFamily: 'kanit-light'}]}> Recommended Add-On </Text>
                    </View>
                    <FlatList
                        data={recommendedAddOnData}
                        renderItem={this.renderPackageItem}
                        keyExtractor={this.keyExtractor}
                    />
                    <View style={styles.textLabel}>
                        <Text style={[{fontSize: 18, fontFamily: 'kanit-light'}]}> Top Hit </Text>
                    </View>
                    <FlatList
                        data={topHitData}
                        renderItem={this.renderPackageItem}
                        keyExtractor={this.keyExtractor}
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
    }
});

//make this component available to the app
export default Package;
