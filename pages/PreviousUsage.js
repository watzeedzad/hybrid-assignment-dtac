//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import BackTitleBar from '../components/Utils/BackTitleBar';
import PureChart from 'react-native-pure-chart';
import { Font, AppLoading } from 'expo';
import ChartView from 'react-native-highcharts';

let sampleData = [
    {
      seriesName: 'series1',
      data: [
        {x: '2018-02-01', y: 30},
        {x: '2018-02-02', y: 200},
        {x: '2018-02-03', y: 170},
        {x: '2018-02-04', y: 250},
        {x: '2018-02-05', y: 10}
      ],
      color: '#297AB1'
    },
    {
      seriesName: 'series2',
      data: [
        {x: '2018-02-01', y: 20},
        {x: '2018-02-02', y: 100},
        {x: '2018-02-03', y: 140},
        {x: '2018-02-04', y: 550},
        {x: '2018-02-05', y: 40}
      ],
      color: 'yellow'
    }
  ]

// create a component
class PreviousUsage extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         
      };
    };
    
    async componentDidMount() {
        await Font.loadAsync({
            'kanit-light': require('../assets/fonts/Kanit/Kanit-Light.ttf')
        });
        this.setState({ fontLoaded: true });
    }

    _onPress() {
        Actions.usage()
    }

    render() {
        if (!this.state.fontLoaded) {
            return <AppLoading/>
        }
        var Highcharts = 'Highcharts';
        var conf = {
            chart: {
                type: 'bar',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
            },
            title: {
                text: ''
            },
            yAxis: {
                title: {
                    text: 'usage amount'
                }
            },
            xAxis: {
                title: {
                    text: 'cycle'
                },
                categories: ['2/19', '1/19', '12/18']
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'calls',
                data: [1, 1, 4]
            },{
                name: 'internet',
                data: [5, 7, 3]
            }]
        };

        const options = {
            global: {
                useUTC: false
            },
            lang: {
                decimalPoint: ',',
                thousandsSep: '.'
            }
        };
        return (
            <View style={styles.container}>
                <BackTitleBar
                    onPress={() => this._onPress()}
                    titleText={'Previous Usage'}
                />
                <View style={styles.titleContainer}>
                    <Image source={require('../assets/usage/usageLast.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>
                    <View style={{flex: 0, flexDirection: 'column'}}>
                        <Text style={{fontFamily: 'kanit-light', fontSize: 16}}> Your calls and internet usage history of the last 3 </Text>
                        <Text style={{fontFamily: 'kanit-light', fontSize: 16}}> months </Text>
                    </View>
                </View>
                <View style={{flex: 1, padding: 5}}>
                <ChartView style={{height:300}} config={conf} options={options}></ChartView>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 3,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
    },
    titleContainer: {
        flex: 0.1,
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
    }
});

//make this component available to the app
export default PreviousUsage;
