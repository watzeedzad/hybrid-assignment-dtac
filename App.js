import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Campaign from './pages/Campaign';
import Package from './pages/Package';
import TitleBar from './components/Utils/TitleBar';
import NavBar from './components/Utils/NavBar';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
      // <View style={styles.container}>
      //   {/* <TitleBar titleText={'Campaign'}/>
      //   <Package />
      //   <NavBar/> */}
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});