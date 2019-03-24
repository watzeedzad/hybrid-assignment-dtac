import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Campaign from './pages/Campaign'
import TitleBar from './components/Utils/TitleBar';
import NavBar from './components/Utils/NavBar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TitleBar titleText={'Campaign'}/>
        <Campaign />
        <NavBar/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});