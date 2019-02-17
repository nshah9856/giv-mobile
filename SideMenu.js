import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      flex: 1
    },
    navItemStyle: {
      padding: 15,
      textAlign: 'center',
      fontSize: 16,
    },
  }
);

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View >
        <View style={{borderBottomColor: "grey", borderBottomWidth: 1}}>
          <Text style={{padding: 20, textAlign: 'center', fontSize: 36, color: "#9cd585"}}>sharity</Text>
        </View>
        <ScrollView>
          <View>
              <TouchableHighlight underlayColor="#dddddd" onPress={this.navigateToScreen('Home')}>
              <Text style={styles.navItemStyle} >
              home
              </Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#dddddd" onPress={this.navigateToScreen('Profile')}>
              <Text style={styles.navItemStyle} >
              profile
              </Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#dddddd" onPress={this.navigateToScreen('Settings')}>
              <Text style={styles.navItemStyle} >
              settings
              </Text>
              </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;