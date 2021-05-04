import React, {Component} from 'react';
import {Text} from 'react-native-elements';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

class MyProfile extends Component {
  render() {
    return (
      <WebView source={{uri: 'http://10.0.2.2:3000'}} style={{marginTop: 20}} />
    );
  }
}

export default MyProfile;
