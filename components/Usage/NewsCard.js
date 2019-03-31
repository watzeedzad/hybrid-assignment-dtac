import React, { Component } from 'react'
import { Card } from 'react-native-paper'
import { View, Text, StyleSheet, Image } from 'react-native';

export class NewsCard extends Component {
    render() {
        return (
            <Card style={styles.container} elevation={5}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require("../../assets/usage/news.jpg")}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.textHeader}>NEWS AND ENTERTAINMENT</Text>
                        <Text style={styles.desc}>There is no news and entertainment</Text>
                    </View>
                </View>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        marginLeft: 10,
        marginRight: 10,
    },
    textContainer: {
        margin: 10
    },
    textHeader: {
        marginBottom: 5,
        fontSize: 19,
        textAlign: 'left',
        fontFamily: 'kanit-light',
    },
    desc: {
        fontSize: 13,
        textAlign: 'left',
        fontFamily: 'kanit-light',
        color: 'gray'
    }
});

export default NewsCard
