import React from 'react';
import {Button, Input, Text} from 'react-native-elements';
import {ScrollView, View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const SubjectDetailsScreen = (props) => {
  const serviceId = props.route.params.serviceId;
  const selectedService = useSelector((state) =>
    state.servicesState.services.find((item) => item.id === serviceId),
  );

  const dispatch = useDispatch();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text h2>{selectedService.name}</Text>
        <Text style={styles.price}>${selectedService.price.toFixed(2)}</Text>
        <Text style={styles.description}>{selectedService.info}</Text>

        <Button title="Apply" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  description: {
    fontSize: 22,
    marginBottom: 20,
  },
  price: {
    marginVertical: 20,
    color: 'blue',
  },
});
export default SubjectDetailsScreen;
