import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Slides from '../components/Slides';
import { AppLoading } from 'expo';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#03A9F4' },
  { text: 'Use this to get a job', color: '#009688' },
  { text: 'Set your location then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {

  state = { token: null };

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.setState({ token });
      this.props.navigation.navigate('map');
    } else {
      this.setState({ token: false });
    }
    
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    if (this.state.token === null) {
      return <AppLoading/>;
    }
    return (
      <View style={{ flex: 1 }}>
        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
      </View>
    );
  }
}

export default WelcomeScreen;