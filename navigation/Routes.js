//import liraries
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import PreviousUsage from '../pages/PreviousUsage';
import Usage from '../pages/Usage';
import Outstanding from '../pages/Outstanding';
import PackagePage from '../pages/Package';
import RewardPage from '../pages/Reward';
import CampaignPage from '../pages/Campaign';
import OtherPage from '../pages/Other';
import CampaignDetail from '../pages/CampaignDetail';
import MainPackage from '../pages/MainPackage'

// create a component
class Routes extends Component {

    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar>
                {/* <TitleBar titleText={'Usage'}/> */}
                    <Scene key="usage"
                        component={Usage}
                        initial
                    />
                    <Scene key="previousUsage"
                        component={PreviousUsage}
                    />
                    <Scene key="outstanding"
                        component={Outstanding}
                    />
                    <Scene key="package"
                        component={PackagePage}
                    />
                    <Scene key="reward"
                        component={RewardPage}
                    />
                    <Scene key="campaign"
                        component={CampaignPage}
                    />
                    <Scene key="other"
                        component={OtherPage}
                    />
                    <Scene key="campaignDetail"
                        component={CampaignDetail}
                    />
                    <Scene key="mainPackage"
                        component={MainPackage}
                    />
                </Scene>
            </Router>
            // <View style={styles.container}>
            //     <TouchableOpacity
            //         onPress={() => this._onPress()}
            //     >
            //         <Text>Usage</Text>
            //     </TouchableOpacity>
            // </View>
        );
    }
}

// define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });

//make this component available to the app
export default Routes;
