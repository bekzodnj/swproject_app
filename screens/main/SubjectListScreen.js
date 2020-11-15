import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Button, Input, Text, ThemeProvider} from 'react-native-elements';
import ServiceCardItem from '../../components/services/ServiceCardItem';

import {useDispatch, useSelector} from 'react-redux';
import * as serviceActions from '../../store/actions/services';

function SubjectListScreen(props) {
  const services = useSelector((state) => state.servicesState.services);
  const dispatch = useDispatch();

  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Text h1 style={{marginVertical: 30}}>
          Browse subjects
        </Text>
        <FlatList
          data={services}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(itemData) => {
            return (
              <ServiceCardItem
                title={itemData.item.name}
                info={itemData.item.info}
                onViewDetails={() => {
                  props.navigation.navigate('SubjectDetails', {
                    serviceId: itemData.item.id,
                    serviceTitle: itemData.item.name,
                  });
                }}
              />
            );
          }}
        />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingBottom: 120,
  },
});

export default SubjectListScreen;
