//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import BackTitle from '../components/Utils/BackTitleBar';
import { Actions } from 'react-native-router-flux';
import { Font, AppLoading } from 'expo';

// create a component
class CampaignDetail extends Component {
    
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
        this.setState({ fontLoaded: true })
    }

    _onPress() {
        Actions.campaign();
    }
    
    render() {
        if (!this.state.fontLoaded) {
            return <AppLoading/>
        }
        console.log(this.props.detailData);
        return (
            <View style={styles.container}>
                <BackTitle 
                    onPress={() => this._onPress()}
                    titleText={'Campaign'}
                />
                <ScrollView>
                    <View style={styles.imageContrainer}>
                        <Image source={this.props.bannerPic} style={styles.image}/>
                    </View>
                    <View style={styles.firstLineContainer}>
                        <View style={{flex: 0.65}}>
                            <Text style={styles.fristLineText}>{this.props.detailData.title}</Text>
                        </View>
                        <View style={{flex: 0.35, justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity
                                style={styles.packageDetailButton}
                                activeOpacity={0.5}
                            >
                                <Text style={{color: '#ffffff', fontFamily: 'kanit-light', fontSize: 16, textAlign: 'center'}}> Detail </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.secondLineContainer}>
                        <Text style={styles.secondLineText}>{this.props.detailData.desc}</Text>
                    </View>
                    <View style={styles.thirdLineContainer}>
                        <Text style={styles.thirdLineText}>{this.props.detailData.line3}</Text>
                    </View>
                    <View style={styles.latLineContainer}>
                        <Text style={styles.lastLineText}>{this.props.detailData.condition}</Text>
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
        // justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    imageContrainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: Dimensions.get('window').width,
        height: 205,
        // resizeMode: 'contain',
        
    },
    mainContent: {
        flex: 1
    },
    firstLineContainer: {
        padding: 15,
        flex: 1,
        flexDirection: 'row',
    },
    secondLineContainer: {
        padding: 15,
        flex: 1,
    },
    thirdLineContainer: {
        padding: 15,
        flex: 1,
    },
    latLineContainer: {
        padding: 15,
        flex: 1,
    },
    packageDetailButton: {
        marginTop: 2.5,
        paddingTop: 5,
        paddingBottom: 5,
        // marginLeft: 20,
        // marginRight: 30,
        backgroundColor: '#19AAF8',
        borderRadius: 30,
        // borderWidth: 1,
        borderColor: '#fff',
        // alignItems: 'flex-end',
        width: 100,
    },
    fristLineText: {
        fontSize: 20,
        // fontWeight: 'bold',
        fontFamily: 'kanit-light',
        textAlign: 'left',
        // paddingTop: 17,
    },
    secondLineText: {
        fontFamily: 'kanit-light',
        fontSize: 18
    },
    thirdLineText: {
        fontFamily: 'kanit-light',
        fontSize: 18
    },
    lastLineText: {
        fontFamily: 'kanit-light',
        fontSize: 12
    }
});

//make this component available to the app
export default CampaignDetail;
