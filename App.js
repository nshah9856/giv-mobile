import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import NavBar from './Navigation';
import { Video } from 'expo';

export default class App extends React.Component {
  render() {
    const { width } = Dimensions.get('window');
    return (
      <View>
        <NavBar/>
        {/* <View style={styles.container}> */}
          <Text>Open up App.js to start working on your app!</Text>
        {/* </View> */}
        <View>
          <Video
            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
            shouldPlay
            resizeMode="cover"
            volume={0.0}
            style={{ width, height: 300 }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
