import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from '../common'

class LoginForm extends Component {
  state = {
    text: ''
  };

  render () {
    return (
        <Card>
          <CardSection>
            <Input
                value={this.state.text}
                label="Email"
                onChangeText={ text => this.setState({ text })}
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