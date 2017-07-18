import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AuthScreen extends React.Component {

  static navigationOptions = {
    title: 'Review Jobs',
    headerRight: <Text>Go Right</Text>
  }

  render() {
    return (
      <View>
      	<Text>review screen</Text>
      	<Text>review screen</Text>
      	<Text>review screen</Text>
      	<Text>review screen</Text>
      </View>
    );
  }
}

export default AuthScreen;