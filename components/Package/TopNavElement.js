//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Font, AppLoading } from 'expo';

// create a component
class TopNavElement extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         fontLoaded: false
      }
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
            return <AppLoading/>
        }
        return (
            <View style={styles.container}>
                <Image style={styles.iconPic} source={this.props.iconPic}/>
                <Text style={styles.titleText}> {this.props.titleText} </Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 0.15,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        width: 60,
        height: 70,
    },
    iconPic: {
        width: 30,
        height: 30
    },
    titleText: {
        fontFamily: 'niramit-regular',
        fontSize: 14
    }
});

//make this component available to the app
export default TopNavElement;
