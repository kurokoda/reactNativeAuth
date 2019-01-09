import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm'

class App extends Component {
  state = {
    loggedIn: false
  }

  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyDGK6tAzNmT5UgNGzG0xEcRdZBcFf4RPOI',
      authDomain: 'reactnativeauth-8e36c.firebaseapp.com',
      databaseURL: 'https://reactnativeauth-8e36c.firebaseio.com',
      projectId: 'reactnativeauth-8e36c',
      storageBucket: 'reactnativeauth-8e36c.appspot.com',
      messagingSenderId: '311378830273'
    });

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header text='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({});
