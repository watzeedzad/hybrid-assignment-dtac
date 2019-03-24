//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { Font, AppLoading } from 'expo';

// create a component
class TitleBar extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         fontLoaded: false
      };
    };
    

    async componentWillMount() {
        await Font.loadAsync({
            'niramit-regular': require('../../assets/fonts/Niramit-Regular.ttf')
        });
        this.setState({fontLoaded: true});
    }

    render() {
        if (!this.state.fontLoaded) {
            return <AppLoading/>;
        }
        return (
            <View style={styles.container}>
                <View style={styles.subContainerLeft}>
                    <Text style={styles.titleText}> {this.props.titleText} </Text>
                </View>
                <View style={styles.subContainerRight}>
                    <Image style={styles.dtacIcon} source={require('../../assets/utils/dtac-logo.png')}/>
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
        backgroundColor: '#19AAF8',
        marginTop: StatusBar.currentHeight,
    },
    subContainerLeft: {
        flex: 0.5,
        flexDirection: 'row'
    },
    subContainerRight: {
        flex: 0.5,
        flexDirection: 'row-reverse'
    },
    titleText: {
        fontFamily: 'niramit-regular',
        fontSize: 18,
        color: '#FFFFFF',
        margin: 15,
    },
    dtacIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        margin: 15,
    }
});

//make this component available to the app
export default TitleBar;
