import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Input, Text, ThemeProvider} from 'react-native-elements';

const ServiceCardItem = (props) => {
  return (
    <View style={styles.card}>
      <Text h4>{props.title}</Text>
      <Text style={styles.cardText}>{props.info}</Text>
      <Button title="More information" onPress={props.onViewDetails} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e6ebeb',
    padding: 16,
    borderRadius: 5,
    marginVertical: 10,
  },
  cardText: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 'normal',
  },
});

export default ServiceCardItem;
