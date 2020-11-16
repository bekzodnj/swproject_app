import React from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  H1,
} from 'native-base';

import {Button, Text} from 'react-native-elements';
import {ScrollView, View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

export default function SubjectDetailsScreen(props) {
  const serviceId = props.route.params.serviceId;
  const selectedService = useSelector((state) =>
    state.servicesState.services.find((item) => item.id === serviceId),
  );

  const dispatch = useDispatch();
  return (
    <ScrollView>
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
              <Button title="Apply" />
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
                <Text style={styles.mainText}>Duration (in minutes)</Text>

                <Text style={styles.secondaryText}>90</Text>
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
});
