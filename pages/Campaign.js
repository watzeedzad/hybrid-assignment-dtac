import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-paper'
import { Font, AppLoading } from 'expo';

const data = [
    { id: 0, text: '::::: Polar Polar Challenge :::::', image: require("../assets/campaigns/campaign1.jpg") },
    { id: 1, text: '10GB 7วัน - 199 บาท *156*199#', image: require("../assets/campaigns/campaign2.jpg") },
    { id: 2, text: '3GB 1วัน - 49 บาท *156*049#', image: require("../assets/campaigns/campaign3.jpg") },
    { id: 3, text: '12GB 30วัน - 599 บาท *156*599#', image: require("../assets/campaigns/campaign4.jpg") },
    { id: 4, text: 'บริการดวงเศรษฐี อใมิสเชอรรี่ ทดลองใช้ฟรี 7 วัน', image: require("../assets/campaigns/campaign5.jpg") },
    { id: 5, text: 'ทดลองใช้ฟรี 14 วัน คลิปข่าวด่วนINN Breaking News', image: require("../assets/campaigns/campaign6.jpg") },
    { id: 6, text: 'บริการส่งเอ็มวีถึงมือถือคุณทุกวัน ทดลองฟรี 7 วัน', image: require("../assets/campaigns/campaign7.jpg") },
    { id: 7, text: 'บริการส่งเพลงเต็มถึงมือคุณทุกวัน ทดลองฟรี 7 วัน', image: require("../assets/campaigns/campaign8.jpg") },
    { id: 8, text: 'บริการเคล็ดลับเสริมดวงเฮงโดยอ.ช้าง ทดลองฟรี 7 วัน', image: require("../assets/campaigns/campaign9.jpg") },
]


export class Campaign extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false
        };
    }

    async componentWillMount() {
        await Font.loadAsync({
            'niramit-regular': require('../assets/fonts/Niramit-Regular.ttf')
        });
        this.setState({fontLoaded: true});
    }

    renderItem = ({ item }) => {
        return (

            <Card style={styles.card} elevation={3}>
                <Image
                    style={styles.image}
                    source={item.image}
                />
                <Text style={styles.campaignName}>{item.text}</Text>
            </Card>
        )
    }

    render() {

        if (!this.state.fontLoaded) {
            return <AppLoading/>
        }

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.buttonPanel}>
                        <View style={{flex:1}}>
                            <Image
                                style={{height:30, width:82}}
                                source={require("../assets/campaigns/button1.jpg")}
                            />
                        </View>
                        <View style={{flex:3,marginLeft:15}}>
                            <Image
                                style={{height:30, width:210}}
                                source={require("../assets/campaigns/button2.jpg")}
                            />
                        </View>
                    </View>
                    <View>
                        <FlatList
                            data={data}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => item.id.toString()}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        justifyContent: 'center',
        // paddingTop: 30,
        backgroundColor: '#FFF'
    },
    card: {
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 10,
        marginRight: 10,
        padding: 5
    },
    image: {
        width: 328,
        height: 200
    },
    campaignName: {
        margin: 10,
        fontSize: 15,
        textAlign: 'left',
        fontFamily: 'niramit-regular',
    },
    buttonPanel: {
        margin: 8,
        flexDirection: 'row'
    }
});

export default Campaign
