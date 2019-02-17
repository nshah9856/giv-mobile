import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet, Linking, Image } from 'react-native';
import {Button, Icon} from 'react-native-elements';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View alignItems='center' justifyItems='flex-start'>
        {/* <View alignItems='center'> */}
          <Image resizeMethod='scale' style={{scaleX:0.5, scaleY:0.5}} source={require('./assets/sharity-small-green.png')}/>
        {/* </View>   */}
        <ScrollView>
          <View style={{flexDirection: 'row'}} justifyItems='flex-start'><Icon name='menu'/><Text style={styles.button}>home</Text></View>
          <Text style={styles.button}>payment information</Text>
          <Text style={styles.button}>contact us</Text>
          <Text style={styles.button}>delete account</Text>
        </ScrollView>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;

const styles = StyleSheet.create({
  button: {
    color: 'black',
    padding: 10,
    textAlign: 'left'
  },
});