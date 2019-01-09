import firebase from 'firebase';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from '../common'
class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  onButtonPress(){
    const {email, password} = this.state;
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(()=>{
      firebase
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch(()=>{
        this.setState({ error: 'Authentication Failed' })
      })
    })
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
            <Button
              onPress={this.onButtonPress.bind(this)}
            >
              Log in
            </Button>
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