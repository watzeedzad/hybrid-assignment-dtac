import React from 'react';
import { View } from 'react-native';
import Routes from './navigation/Routes';
import NavBar from './components/Utils/NavBar';

export default class App extends React.Component {
  render() {
    return (
      // <AppNavigator/>
      <View style={{flex: 1}}>
        {/* <AppNavigator/> */}
        <Routes/>
        <NavBar/>
      </View>
      // <Routes/>
      // <View style={styles.container}>
      //   {/* <TitleBar titleText={'Campaign'}/>
      //   <Package />
      //   <NavBar/> */}
      // </View>
    )
  }
}