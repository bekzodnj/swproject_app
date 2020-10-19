import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Button, Input, Text, ThemeProvider} from 'react-native-elements';

import {Calendar} from 'react-native-big-calendar';

function DashboardScreen({navigation}) {
  return (
    <ThemeProvider>
      <ScrollView style={{flex: 1, padding: 30}}>
        <View>
          <Text h1 style={{marginVertical: 30}}>
            Your dashboard
          </Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>
              Upcoming class: Introduction to Calculus
            </Text>
            <Text style={styles.card_2}>At 10:15am in 12 October</Text>
            <Button title="Check the calendar >" style={{marginVertical: 20}} />
          </View>
        </View>
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
    marginBottom: 15,
  },
});

export default DashboardScreen;
