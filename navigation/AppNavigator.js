import React, {
  Component
} from 'react';
import {
  View,
  Text
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation';
import UsagePage from '../pages/Usage';
import PackagePage from '../pages/Package';
import RewardPage from '../pages/Reward';
import CampaignPage from '../pages/Campaign';
import OtherPage from '../pages/Other';

// const AppNavigator = createStackNavigator(
//  {
//     Home: {
//         screen: HomeContactList
//     },
//     Detail: {
//         screen: DetailContactDetail
//     }
//  },
//  {
//     initialRouteName: "Home"
//   }
// ) ;

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: UsagePage
  },
  Package: {
    screen: PackagePage
  },
  Reward: {
    screen: RewardPage
  },
  Campaign: {
    screen: CampaignPage
  },
  Other: {
    screen: OtherPage
  }
}, {
  defaultNavigationOptions: ({
    navigation
  }) => ({
    tabBarIcon: ({
      focused,
      horizontal,
      tintColor
    }) => {
      const {
        routeName
      } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      // if (routeName === 'Home') {
      //   iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      // } else if (routeName === 'Detail') {
      //   iconName = `ios-add-circle${focused ? '' : '-outline'}`;
      // }

      // You can return any component that you like here!
      return <IconComponent name = {
        iconName
      }
      size = {
        25
      }
      color = {
        tintColor
      }
      />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#25AEF7',
    inactiveTintColor: '#2A3036',
  },
});

const TabNavContainer = createAppContainer(TabNavigator);

export default TabNavContainer;