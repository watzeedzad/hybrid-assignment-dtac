import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';

import ChartView from 'react-native-highcharts';

class BarChart extends Component {

    render() {

        var Highcharts = 'Highcharts';
        var conf = {
            chart: {
                type: 'column',
                animation: Highcharts.svg,
            },
            title: {
                text: ''
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: '#00ACE7'
                    }
                } 
            },
            xAxis: {
                categories: ['10/18', '11/18', '12/18', '01/19', '02/19']
            },
            exporting: {
                enabled: false
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                }
            },
            series: [{
                name: 'paid',
                data: [373.43, 373.43, 373.43, 373.43, 0],
                color: '#00ACE7',
            }, {
                name: 'due',
                data: [0, 0, 0, 0, 373.43],
                color: '#D20091'
            }]
        };

        return (
            <View style={{margin:15}}>
                <ChartView style={{ height: Dimensions.get('window').height * 0.3 }} config={conf} ></ChartView>
            </View>
        );
    }
}

export default BarChart;
