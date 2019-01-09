import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from '../common'

class LoginForm extends Component {
  state = {
    email: ''
  };

  render () {
    return (
        <Card>
          <CardSection>
            <Input
                label="Email"
                onChangeText={ email => this.setState({ email })}
                placeholder="username@gmail.com"
                value={this.state.text}
            />
          </CardSection>

          <CardSection />

          <CardSection>
            <Button>Log in</Button>
          </CardSection>
        </Card>
    )
  }
}

const styles = StyleSheet.create({

});

export default LoginForm;