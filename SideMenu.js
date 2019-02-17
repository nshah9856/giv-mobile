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
      <View alignItems='flex-start' justifyItems='flex-start' style={{padding:15}}>
        {/* <View alignItems='center'> */}
        <Image resizeMode='contain' style={{width:"65%"}} source={require('./assets/sharity-small-green.png')}/>
        {/* </View>   */}
        <ScrollView>
          <View style={{flexDirection: 'row'}} justifyItems='center' alignItems='center'><Icon name='home'/><Text style={styles.button}>home</Text></View>
          <View style={{flexDirection: 'row'}} justifyItems='center' alignItems='center'><Icon name='person'/><Text style={styles.button}>profile</Text></View>
          <View style={{flexDirection: 'row'}} justifyItems='center' alignItems='center'><Icon name='message'/><Text style={styles.button}>contact us</Text></View>
          <View style={{flexDirection: 'row'}} justifyItems='center' alignItems='center'><Icon name='home'/><Text style={styles.button}>home</Text></View>
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
    padding: 20,
    textAlign: 'left'
  },
});