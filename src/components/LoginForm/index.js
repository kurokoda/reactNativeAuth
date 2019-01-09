import firebase from 'firebase';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from '../common'
class LoginForm extends Component {
  state = {
    email: '',
    error: '',
    loading: false,
    password: ''
  };

  onButtonPress = () => {
    const {email, password} = this.state;

    this.setState({ error: '', loading: true });

    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess)
    .catch(()=>{
      firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(this.onLoginError)
    })
  };

  onLoginError = () => {
    this.setState({ error: 'Authentication Failed', loading: false })
  };

  onLoginSuccess = () => {
    this.setState({
      email: '',
      error: '',
      loading: false,
      password: ''
    })
  }

  renderButtonOrSpinner() {
    if(this.state.loading){
      return <Spinner size="small" />
    }
    return (
        <Button
          onPress={this.onButtonPress}
        >
          Log in
        </Button>
    )
  }

  render () {

    const { errorTextStyle } = styles;

    return (
        <Card>
          <CardSection>
            <Input
                label="Email"
                onChangeText={ email => this.setState({ email })}
                placeholder="username@gmail.com"
                value={this.state.email}
            />
          </CardSection>

          <CardSection>
            <Input
                label="Password"
                onChangeText={ password => this.setState({ password })}
                placeholder="password"
                secureTextEntry
                value={this.state.password}
            />
          </CardSection>

          <Text style={errorTextStyle}>
            {this.state.error}
          </Text>

          <CardSection>
            {this.renderButtonOrSpinner()}
          </CardSection>
        </Card>
    )
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});

export default LoginForm;