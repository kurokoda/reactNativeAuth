import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/common';
import firebase from 'firebase';

class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyDGK6tAzNmT5UgNGzG0xEcRdZBcFf4RPOI',
      authDomain: 'reactnativeauth-8e36c.firebaseapp.com',
      databaseURL: 'https://reactnativeauth-8e36c.firebaseio.com',
      projectId: 'reactnativeauth-8e36c',
      storageBucket: 'reactnativeauth-8e36c.appspot.com',
      messagingSenderId: '311378830273'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header text='Authentication' />
        <Text>This is an app.</Text>
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({});
