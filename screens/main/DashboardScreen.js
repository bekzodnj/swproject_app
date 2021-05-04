import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Button, Input, Text, ThemeProvider} from 'react-native-elements';
import {Button as Btn, Text as Txt, Icon} from 'native-base';
// import {Calendar} from 'react-native-big-calendar';

function DashboardScreen({navigation}) {
  return (
    <ThemeProvider>
      <ScrollView style={{flex: 1, padding: 30}}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require('./img/profile.png')}
            style={{width: 72, height: 72, alignSelf: 'flex-end'}}
          />
        </TouchableOpacity>

        <View>
          <Text h1 style={{marginVertical: 30}}>
            Your dashboard
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>Upcoming class:</Text>
            <Text style={styles.card_2}>
              Calculus Intro. At 12:00pm in 24th November
            </Text>

            <Button title="Check calendar >" style={{marginVertical: 20}} />
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
    color: 'grey',
    marginBottom: 15,
  },
});

export default DashboardScreen;
