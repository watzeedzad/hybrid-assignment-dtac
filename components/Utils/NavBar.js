//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import { Font, AppLoading } from 'expo';

let tintColorText = '';

// create a component
class NavBar extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         fontLoaded: false,
         usageNavStatus: true,
         packageNavStatus: false,
         rewardNavStatus: false,
         campaignNavStatus: false,
         otherNavStatus: false
      };
    };

    _onPressUsage = () => {
        this.setState({
            usageNavStatus: true
        });
        this.setState({
            packageNavStatus: false
        });
        this.setState({
            rewardNavStatus: false
        });
        this.setState({
            campaignNavStatus: false
        });
        this.setState({
            otherNavStatus: false
        });
    }

    _onPressPackage = () => {
        this.setState({
            usageNavStatus: false
        });
        this.setState({
            packageNavStatus: true
        });
        this.setState({
            rewardNavStatus: false
        });
        this.setState({
            campaignNavStatus: false
        });
        this.setState({
            otherNavStatus: false
        });
    }

    _onPressReward = () => {
        this.setState({
            usageNavStatus: false
        });
        this.setState({
            packageNavStatus: false
        });
        this.setState({
            rewardNavStatus: true
        });
        this.setState({
            campaignNavStatus: false
        });
        this.setState({
            otherNavStatus: false
        });
    }

    _onPressCampaign = () => {
        this.setState({
            usageNavStatus: false
        });
        this.setState({
            packageNavStatus: false
        });
        this.setState({
            rewardNavStatus: false
        });
        this.setState({
            campaignNavStatus: true
        });
        this.setState({
            otherNavStatus: false
        });
    }

    _onPressOther = () => {
        this.setState({
            usageNavStatus: false
        });
        this.setState({
            packageNavStatus: false
        });
        this.setState({
            rewardNavStatus: false
        });
        this.setState({
            campaignNavStatus: false
        });
        this.setState({
            otherNavStatus: true
        });
    }

    async componentDidMount() {
        styles.pressedNav = null;
        await Font.loadAsync({
            'niramit-regular': require('../../assets/fonts/Niramit-Regular.ttf')
        });
        this.setState({fontLoaded: true});
    }

    render() {
        if (!this.state.fontLoaded) {
            return <AppLoading/>;
        }
        if (this.state.usageNavStatus) {
            tintColorText = '#1CABF8';
        } else {
            tintColorText = '#2E353A'
        }
        return (
            <View style={styles.container}>
                <View style={styles.usageNav}>
                    <TouchableOpacity
                        onPress={this._onPressUsage}
                    >
                        <View style={styles.iconPicContainer}>
                            <Image style={[styles.iconPic, getTintColor(this.state.usageNavStatus)]} source={require('../../assets/utils/usage.png')}/>
                        </View>
                        <Text style={[styles.text, getTextColor(this.state.usageNavStatus)]}> Usage </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.packageNav}>
                    <TouchableOpacity
                        onPress={this._onPressPackage}
                    >
                        <View style={styles.iconPicContainer}>
                            <Image style={[styles.iconPic, getTintColor(this.state.packageNavStatus)]} source={require('../../assets/utils/package.png')}/>
                        </View>
                        <Text style={[styles.text, getTextColor(this.state.packageNavStatus)]}> Package </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rewardNav}>
                    <TouchableOpacity
                        onPress={this._onPressReward}
                    >
                        <View style={styles.iconPicContainer}>
                            <Image style={[styles.iconPic, getTintColor(this.state.rewardNavStatus)]} source={require('../../assets/utils/reward.png')}/>
                        </View>
                        <Text style={[styles.text, getTextColor(this.state.rewardNavStatus)]}> Reward </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.campaignNav}>
                    <TouchableOpacity
                        onPress={this._onPressCampaign}
                    >
                        <View style={styles.iconPicContainer}>
                            <Image style={[styles.iconPic, getTintColor(this.state.campaignNavStatus)]} source={require('../../assets/utils/campaign.png')}/>
                        </View>
                        <Text style={[styles.text, getTextColor(this.state.campaignNavStatus)]}> Campaign </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.otherNav}>
                    <TouchableOpacity
                        onPress={this._onPressOther}
                    >
                        <View style={styles.iconPicContainer}>
                            <Image style={[styles.iconPic, getTintColor(this.state.otherNavStatus)]} source={require('../../assets/utils/other.png')}/>
                        </View>
                        <Text style={[styles.text]}> Other </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        flexDirection: 'row',
    },
    usageNav: {
        flex: 0.2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    packageNav: {
        flex: 0.2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rewardNav: {
        flex: 0.2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    campaignNav: {
        flex: 0.2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    otherNav: {
        flex: 0.2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'niramit-regular',
        fontSize: 14,
    },
    iconPicContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconPic: {
        width: 25,
        height: 25,
    },
});

function getTintColor(isPress) {
    if (isPress) {
        return {
            tintColor: '#1CABF8'
        }
    } else {
        return {
            tintColor: '#2E353A'
        }
    }
}

function getTextColor(isPress) {
    if (isPress) {
        return {
            color: '#1CABF8'
        }
    } else {
        return {
            color: '#2E353A'
        }
    }
}

//make this component available to the app
export default NavBar;
