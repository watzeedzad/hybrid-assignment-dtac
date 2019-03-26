//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import TopNavElement from '../components/Package/TopNavElement';
import TitleBar from '../components/Utils/TitleBar';
import { Font, AppLoading } from 'expo';

const topNavElementData = [
    {
        id: 0,
        iconPath: require('../assets/package/icon/packageHistory.png'),
        title: 'Package History'
    },
    {
        id: 1,
        iconPath: require('../assets/package/icon/volumeBooster.png'),
        title: 'Volume Booster'
    },
    {
        id: 2,
        iconPath: require('../assets/package/icon/speedBooster.png'),
        title: 'Speed Booster'
    },
    {
        id: 3,
        iconPath: require('../assets/package/icon/voice.png'),
        title: 'Voice'
    },
    {
        id: 4,
        iconPath: require('../assets/package/icon/chatSocial.png'),
        title: 'Chat & Social'
    },
    {
        id: 5,
        iconPath: require('../assets/package/icon/mainPackage.png'),
        title: 'Main Package'
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
    
    async componentWillMount() {
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

    render() {
        return (
            <View style={styles.container}>
                <TitleBar titleText={'My menu'}/>
                <FlatList
                    data={topNavElementData}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    horizontal={true}
                    style={{backgroundColor: '#ffffff'}}
                />
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
});

//make this component available to the app
export default Package;
