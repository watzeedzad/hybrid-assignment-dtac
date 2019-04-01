//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});

//make this component available to the app
export default CampaignDetail;
