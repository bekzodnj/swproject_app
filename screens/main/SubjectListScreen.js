import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Input, Text, ThemeProvider} from 'react-native-elements';

function SubjectListScreen({navigation}) {
  return (
    <ThemeProvider>
      <View style={{flex: 1, padding: 30}}>
        <View>
          <Text h1 style={{marginVertical: 20}}>
            All available subjects
          </Text>
          <View style={styles.card}>
            <Text h4>Geometry Basics</Text>
            <Text style={styles.cardText}>
              During the course we start from base and look into more practical
              problem solving skills...
            </Text>
            <Button title="More information" />
          </View>

          <View style={styles.card}>
            <Text h4>Algorithms and Data Structures</Text>
            <Text style={styles.cardText}>
              The course is oriented for students who wants to learn more
              advanced algorithms and data structures
            </Text>
            <Button title="More information" />
          </View>
        </View>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  cardText: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 'normal',
  },
  card: {
    backgroundColor: '#e6ebeb',
    padding: 16,
    borderRadius: 5,
    marginVertical: 10,
  },
  card_2: {
    fontSize: 24,
    lineHeight: 35,
    fontWeight: 'bold',
    color: 'grey',
  },
});

export default SubjectListScreen;
