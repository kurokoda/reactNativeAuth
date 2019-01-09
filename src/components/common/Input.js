import React from 'react';
import { StyleSheet, TextInput, View, Text} from 'react-native';

const Input = ({ label, onChangeText, value }) => {
return (
    <View>
      <Text>{label}</Text>
      <TextInput
          onChangeText={onChangeText}
          style={{ height: 20, width: 100 }}
          value={value}
      />
    </View>
  )
};

const styles = StyleSheet.create({});

export { Input }