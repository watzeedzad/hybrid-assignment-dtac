import React, { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-paper'
import { Font, AppLoading } from 'expo';
import { Actions } from 'react-native-router-flux';

export class CampaignItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fontLoaded: false
        }
    }

    _onPress() {
        Actions.campaignDetail({
            detailData: this.props.item.detailData,
            bannerPic: this.props.item.image
        });
    }

    async componentDidMount() {
        await Font.loadAsync({
            'kanit-light': require('../../assets/fonts/Kanit/Kanit-Light.ttf')
        });
        this.setState({ fontLoaded: true });
    }

    render() {

        if (!this.state.fontLoaded) {
            return <AppLoading />
        }

        return (
            <Card style={styles.card} elevation={3}>
                <TouchableOpacity
                    onPress={() => this._onPress()}
                >
                    <View style={{ flex: 1, padding: 5 }}>
                        <Image
                            style={styles.image}
                            source={this.props.item.image}
                        />
                    </View>
                    <Text style={styles.campaignName}>{this.props.item.text}</Text>
                </TouchableOpacity>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 10,
        marginRight: 10,
    },
    image: {
        width: Dimensions.get('window').width * 0.92,
        height: 230,
        alignSelf: 'center',
        resizeMode: 'cover',
    },
    campaignName: {
        margin: 10,
        fontSize: 15,
        textAlign: 'left',
        fontFamily: 'kanit-light',
    }
})

export default CampaignItem
