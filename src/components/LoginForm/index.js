import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Button, Card, CardSection } from '../common'

class LoginForm extends Component {
  state = {
    text: ''
  };

  render () {
    return (
        <Card>
          <CardSection>
            <TextInput
                value={this.state.text}
                onChangeText={ text => this.setState({ text })}
                style={{ height: 20, width: 100 }} />
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