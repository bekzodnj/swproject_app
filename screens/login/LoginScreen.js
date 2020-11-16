import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function LoginScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text h1>Sign In</Text>
      <Text h4 h4Style={styles.secondaryColor}>
        Login into your account
      </Text>
      <Input placeholder="Email" />
      <Input placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={() => navigation.navigate('Dashboard')} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: -15,
          marginTop: 10,
        }}>
        <Text>Do not have an account?</Text>
        <Button
          title="Sign Up"
          type="clear"
          onPress={() => navigation.navigate('Register')}
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

export default LoginScreen;
