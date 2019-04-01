import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView, Image } from 'react-native';
import TitleBar from '../components/Utils/TitleBar';
import CampaignItem from '../components/Campaign/CampaignItem';
import { Actions } from 'react-native-router-flux';

const campaignDetailData = [{
    title: "Win!! exclusive fans meet with the Toys",
    desc: "Win!! exclusive fans meet with the \"Toys in The Toys and The Fans Mini Concert\", just to subscribe and download ring back tone - The Toys or What the Duck song, subscribe N-Content service or subscribe Spotify Premium package",
    line3: "Now - 31 March 2019\nFor more information please dial *888 (3 baht/minute)",
    condition: "1. Campaign period is valid from 1 March to 31 May 2019.\n2. The winner must be the Operator's subscriber who has been an active member of N-Content or Spotify Premium service on the date of the prize presentation to be qualified as the winner.\n3. The prizes may not be exchanged for cash nor transferred to third part.\n4. The Company will re-draw a new winner to replace the number that wins more than one prize.\n5. The Company reserves all rights to change the conditions of this Campaign and the prizes without prior notice.\n6. The decision of the committee shall be final and absolute.\n7. Any employees (and members of their family) who work with the Parties and the subsidiaries of the Parties may not take part in the sweepstakes."
}, {
    title: "Subscribe today get free trial 30 days *453*188#",
    desc: "When the powerful Dark Wizard escaped custody.\nWizarding world's divided as love and loyalty are tested.\nBring to the ultimate movie of the legendary Harry Potter.\nFantastic Beasts: The Crimes of Grindelwald Watch now at HOOQ",
    line3: "Subscribe today get free trial 30 days. Press *453*188# call\nFree 1 bonus movie rental ticket!",
    condition: "Remark: For dtac postpaid customers only. After trial period 119 Baht/month fee will automatically activated (VAT excluded)"
},{
    title: "Clip Horoscope Sedtee with 7 day free trial",
    desc: "Clip VDO horoscope sedtee by miss Cherry with tarot lucky and tips rich, lucky number",
    line3: "",
    condition: "1. Free trial 7 Days\n2.After free trial period, the service will be automatically renewed and charges at normal fee\n3. You will receive 2 SMS/day (5 baht/SMS, VAT excluded)\n4. For more infomation Tel. 027302424"
},{
    title: "Clip INN Breaking News with 14 day free trial",
    desc: "Breaking News live alert News with INN Breaking News",
    line3: "",
    condition: "1. Free trial 7 Days\n2. After free trial period, Service will be automatically renewed and charges at normal fee\n3. You will receive 6-8 SMS/day (39 baht/Month, VAT excluded)\n4. For more information Tel. 027302424"
}]

const data = [{
        id: 0,
        text: 'Win! exclusive fans meet with Toys',
        image: require("../assets/campaigns/1banner.png"),
        detailData: campaignDetailData[0]
    },
    {
        id: 1,
        text: 'Subscribe tpday get free trial 30 days *453*188#',
        image: require("../assets/campaigns/2banner.png"),
        detailData: campaignDetailData[1]
    },
    {
        id: 2,
        text: 'Clip Horoscope Sedtee with 7 day free tial',
        image: require("../assets/campaigns/3banner.png"),
        detailData: campaignDetailData[2]
    },
    {
        id: 3,
        text: 'Ckip INN Breaking News with 14 day free trial',
        image: require("../assets/campaigns/4banner.png"),
        detailData: campaignDetailData[3]
    },
]

class Campaign extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false
        };
    }

    renderItem = ({ item }) => {
        return (
            <CampaignItem item={item}/>
        )
    }

    render() {

        return (
            <View style={styles.container}>
                <TitleBar titleText={'Usage Summary'} />
                <View style={styles.subContainer}>
                    <ScrollView>
                        <View style={styles.buttonPanel}>
                            <View style={{ flex: 1 }}>
                                <Image
                                    style={{ height: 30, width: 82 }}
                                    source={require("../assets/campaigns/button1.jpg")}
                                />
                            </View>
                            <View style={{ flex: 3, marginLeft: 15 }}>
                                <Image
                                    style={{ height: 30, width: 210 }}
                                    source={require("../assets/campaigns/button2.jpg")}
                                />
                            </View>
                        </View>
                        <View>
                            <FlatList
                                data={data}
                                renderItem={this.renderItem}
                                keyExtractor={(item) => item.id.toString()}
                            />
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    buttonPanel: {
        margin: 8,
        flexDirection: 'row'
    },
    subContainer: {
        flex: 1,
        flexDirection: 'column'
    }
});

export default Campaign
