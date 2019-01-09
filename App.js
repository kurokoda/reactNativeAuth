import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/common';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header text="Authentication" />
        <Text>This is an app.</Text>
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({});
