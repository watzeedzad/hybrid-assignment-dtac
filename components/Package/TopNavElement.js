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
        await Font.loadAsync({
            'kanit-light': require('../../assets/fonts/Kanit/Kanit-Light.ttf')
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        if (!this.state.fontLoaded) {
            return <AppLoading/>
        }
        return (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Image style={styles.iconPic} source={this.props.iconPic}/>
                </View>
                <Text style={styles.titleText}>{this.props.titleText}</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 5,
        // padding: 4,
        width: 60,
        height: 70,
    },
    iconPic: {
        width: 30,
        height: 30
    },
    titleText: {
        fontFamily: 'kanit-light',
        fontSize: 14,
        textAlign: 'center',
    },
    iconContainer: {
        alignItems: 'center',
    }
});

//make this component available to the app
export default TopNavElement;
