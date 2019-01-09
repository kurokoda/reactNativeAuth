import firebase from "firebase";
import React, { Component } from "react";
import { StyleSheet} from "react-native";
import { Button, Card, CardSection } from "../common";

const LogoutForm = () => {
   return (
      <Card>
        <CardSection>
          <Button onPress={()=>{firebase.auth().signOut()}}>Log out</Button>
        </CardSection>
      </Card>
    );
}

export default LogoutForm;
