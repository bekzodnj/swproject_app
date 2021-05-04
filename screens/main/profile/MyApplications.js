import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Button, Input, Text, ThemeProvider} from 'react-native-elements';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Left,
  Title,
  Subtitle,
  Badge,
} from 'native-base';
// import {Calendar} from 'react-native-big-calendar';

function MyApplications({navigation}) {
  return (
    <ThemeProvider>
      <Container>
        <Text h1 style={{marginVertical: 30, marginHorizontal: 20}}>
          My Applications
        </Text>
        <Content padder>
          <Card>
            <CardItem
              header
              style={{
                backgroundColor: '#edfafc',
                flexDirection: 'column',
                alignItems: 'stretch',
              }}>
              <Text h4 style={{marginVertical: 15}}>
                Subject: Calculus Course
              </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Category: Consultation</Text>
                <Text>Status: </Text>
                <Text>Cost: 80 (EUR)</Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Status</Text>
                <Button
                  title="Approved"
                  onPress={() => {}}
                  buttonStyle={{backgroundColor: 'green'}}
                />
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Payment</Text>
                <Button title="Pay via Paypal" onPress={() => {}} />
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>Applied: Mon. 04:40pm</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
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

export default MyApplications;
