import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Button, Card, CardSection } from '../common'
class LoginForm extends Component {
  render () {
    return (
        <Card>
          <CardSection />
            <TextInput style={{ height: 20, width: 100 }} />
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