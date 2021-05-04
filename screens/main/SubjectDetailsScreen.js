import React, {useState} from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  H1,
} from 'native-base';

import {Alert, Modal, TouchableHighlight, TextInput} from 'react-native';

import {Button, Text} from 'react-native-elements';
import {ScrollView, View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

export default function SubjectDetailsScreen(props) {
  const serviceId = props.route.params.serviceId;
  const selectedService = useSelector((state) =>
    state.servicesState.services.find((item) => item.id === serviceId),
  );

  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text h4 style={{marginVertical: 15}}>
              Send your application
            </Text>
            <View>
              <Text style={{marginVertical: 5}}>
                Subject name: Calculus Intro
              </Text>
              <Text style={{marginVertical: 5}}>Teacher: J. John</Text>
              <Text style={{marginVertical: 5}}>
                Time: Tue. 12:00pm - 2:00pm; Fri. 12:00pm - 2:00pm (5 weeks)
              </Text>
            </View>
            <TextInput
              style={{
                borderColor: 'lightgrey',
                borderWidth: 1,
                width: 300,
                marginVertical: 10,
              }}
              multiline={true}
              numberOfLines={2}
            />

            <View style={{flexDirection: 'row'}}>
              <TouchableHighlight
                style={{
                  ...styles.openButton,
                  backgroundColor: '#cc7494',
                  marginRight: 10,
                }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Close</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{...styles.openButton, backgroundColor: '#55ddac'}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Apply</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
      <Container>
        <Content padder>
          <Card>
            <CardItem
              header
              style={{
                backgroundColor: '#edfafc',
                flexDirection: 'column',
                alignItems: 'stretch',
              }}>
              <Text h2 style={{marginVertical: 15}}>
                Calculus Course
              </Text>
              <Button
                title="Apply"
                onPress={() => {
                  setModalVisible(true);
                }}
              />
            </CardItem>
            <CardItem bordered>
              <Body style={styles.cardBody}>
                <Text style={styles.mainText}>Service Subject</Text>

                <Text style={styles.secondaryText}>Math</Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body style={styles.cardBody}>
                <Text style={styles.mainText}>Title</Text>

                <Text style={styles.secondaryText}>Calculus Course</Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body style={styles.cardBody}>
                <Text style={styles.mainText}>Category</Text>

                <Text style={styles.secondaryText}>Consultation</Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body style={styles.cardBody}>
                <Text style={styles.mainText}>Teacher</Text>
                <Text>J. John</Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body style={styles.cardBody}>
                <Text style={styles.mainText}>Duration (in minutes)</Text>

                <Text style={styles.secondaryText}>90</Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body style={styles.cardBody}>
                <Text style={styles.mainText}>Days</Text>
                <View>
                  <Text style={styles.secondaryText}>
                    Tue. 12:00pm - 2:00pm;
                  </Text>
                  <Text style={styles.secondaryText}>
                    Fri. 12:00pm - 2:00pm;
                  </Text>
                </View>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body style={styles.cardBody}>
                <Text style={styles.mainText}>Number of weeks</Text>

                <Text style={styles.secondaryText}>5</Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body style={styles.cardBody}>
                <Text style={styles.mainText}>Min. number of students</Text>

                <Text style={styles.secondaryText}>5</Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body style={styles.cardBody}>
                <Text style={styles.mainText}>Max. number of students</Text>

                <Text style={styles.secondaryText}>20</Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body style={styles.cardBody}>
                <Text style={styles.mainText}>Cost (EUR)</Text>

                <Text style={styles.secondaryText}>80</Text>
              </Body>
            </CardItem>

            <CardItem bordered>
              <Body>
                <Text>
                  During the course we start from base and look into more
                  practical problem solving skills...
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryText: {
    color: 'grey',
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 55,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
