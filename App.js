import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Input, PricingCard} from 'react-native-elements';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import LoginNavigation from './navigation/login/LoginNavigation';
import TabNavigation from './navigation/TabNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <LoginNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
