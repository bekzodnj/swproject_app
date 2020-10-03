import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState(
    'Starter text. Click the button to change it',
  );

  return (
    <View style={styles.container}>
      <Text style={{color: 'blue', marginBottom: 20}}>{outputText}</Text>
      <Button
        title="Change text"
        onPress={() => setOutputText('Text is changed, yeah')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
