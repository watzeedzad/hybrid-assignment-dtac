import React from 'react';
import { StyleSheet } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      // <AppNavigator/>
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