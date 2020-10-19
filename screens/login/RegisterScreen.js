import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function RegisterScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text h1>Sign Up</Text>
      <Text h4 h4Style={styles.secondaryColor}>
        Create a new account
      </Text>
      <Input placeholder="Name" />
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Input placeholder="Confirm password" />
      <Button title="Sign Up" />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: -15,
          marginTop: 10,
        }}>
        <Text>Already have an account?</Text>
        <Button
          title="Sign In"
          type="clear"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text>Forgot your password?</Text>
        <Button title="Password recovery" type="clear" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  secondaryColor: {
    color: 'gray',
    fontWeight: '300',
  },
});

export default RegisterScreen;
