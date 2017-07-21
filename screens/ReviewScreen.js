import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import MapView from 'expo';

class ReviewScreen extends Component {


  static navigationOptions = ({ navigation }) => {

    return {
      title: 'Review Jobs',
      headerRight: (
        <Button 
          title="Settings"
          onPress={() => navigation.navigate('settings') }
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0,122,255,1)"
        />
      ),
      style: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }
    }
  }

  renderLikedJobs() {
    return this.props.likedJobs.map(job => {
      const { company, formattedRelativeTime, url, longitude, latitude } = job;

      const initialRegion = {
        longitude,
        latitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.02
      }

      return (
        <Card>
          <View style={{ height: 200 }}>

            <View style={ styles.detailWrapper }>
              <Text style={styles.italics}>{company}</Text>
              <Text style={styles.italics}>{formattedRelativeTime}</Text>
            </View>
            <Button
              title="Apply Now"
              backgroundColor="#03A9F4"
              onPress={() => Linking.openURL(url)}
            >

            </Button>
          </View>
        </Card>
      );
    })
  }

  render() {
    return (
      <ScrollView>
        {this.renderLikedJobs()}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return { likedJobs: state.likedJobs };
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-around'
  },
  italics: {
    fontStyle: 'italic'
  }
}

export default connect(mapStateToProps)(ReviewScreen);
