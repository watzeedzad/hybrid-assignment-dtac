//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Font, AppLoading } from 'expo';

// create a component
class UserInfo extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         fontLoaded: false
      };
    };
    
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
                <View style={styles.subContainerLeft}>
                    <View style={styles.imageContainer}>
                        <Image source={this.props.userIcon} style={styles.image}/>
                    </View>
                </View>
                <View style={styles.subContainerRight}>
                    <Text style={[styles.font, {fontSize: 20}]}> {this.props.name} </Text>
                    <Text style={[styles.font, {fontSize: 18}]}> {this.props.type} </Text>
                    <Text style={[styles.font, {fontSize: 24}]}> {this.props.tel} </Text>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
    },
    subContainerLeft: {
        flex: 0.3,
    },
    subContainerRight: {
        flex: 0.7,
        flexDirection: 'column',
        paddingTop: 5,
        paddingLeft: 5,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    image: {
        height: 100,
        width: 100,
    },
    font: {
        fontFamily: 'kanit-light'
    }
});

//make this component available to the app
export default UserInfo;
