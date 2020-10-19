import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Button, Input, Text, ThemeProvider} from 'react-native-elements';

import {Calendar} from 'react-native-big-calendar';

function DashboardScreen({navigation}) {
  const today = new Date();
  today.setDate(today.getHours() + 1);

  const today2 = new Date();
  today2.setDate(today2.getHours() + 1);

  const events = [
    {
      title: 'Example Class',
      start: new Date(2020, 1, 11, 9),
      end: new Date(2020, 1, 11, 11, 30),
    },
  ];

  return (
    <ThemeProvider>
      <Text h1 style={{marginVertical: 30}}>
        Your schedule
      </Text>
      <ScrollView style={{flex: 1, padding: 30}}>
        <Calendar
          events={events}
          height={1800}
          date={new Date(2020, 1, 11, 10, 0)}
          scrollOffsetMinutes={480}
          mode={'3days'}
        />
      </ScrollView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  cardText: {
    fontSize: 24,
    lineHeight: 35,
    fontWeight: 'normal',
  },
  card: {
    backgroundColor: '#e6ebeb',
    padding: 16,
    borderRadius: 5,
  },
  card_2: {
    fontSize: 24,
    lineHeight: 35,
    fontWeight: 'bold',
    color: 'grey',
  },
});

export default DashboardScreen;
