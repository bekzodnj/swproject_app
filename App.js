import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Input, PricingCard} from 'react-native-elements';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import LoginNavigation from './navigation/login/LoginNavigation';
import TabNavigation from './navigation/TabNavigation';
import HomeNavigation from './navigation/HomeNavigation';

// Reducers setup
import servicesReducer from './store/reducers/services';

//Redux stuff
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
  servicesState: servicesReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeNavigation />
      </NavigationContainer>
    </Provider>
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
