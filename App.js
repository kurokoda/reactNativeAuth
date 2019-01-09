import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm'
import LogoutForm from './src/components/LogoutForm'


class App extends Component {
  state = {
    loggedIn: null
  };

  renderLoginOrLogoutForm(){
    switch (this.state.loggedIn) {
      case true:
        return <LogoutForm />;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large"/>;
    }
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
      <View style={styles.containerStyle}>
        <Header text='Authentication' />
        {this.renderLoginOrLogoutForm()}
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  containerStyle: {
    minHeight: 40
  }
});
