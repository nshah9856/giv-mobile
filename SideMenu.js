import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet, Linking } from 'react-native';
import {Button} from 'react-native-elements';

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
              <Button
                title="profile"
                type="clear"
                onPress={() => this.props.navigation.navigate("Profile")}
              />

              <Button
                title="payment information"
                type="clear"
                onPress={() => this.props.navigation.navigate("Payments")}
              />

              <Button
                title="contact"
                type="clear"
                onPress={() => Linking.openURL('mailto:support@sharity.com?subject=Sharity')}
              />

              <Button
                title="delete account"
                type="clear"
               onPress={() => this.props.navigation.navigate("Home")}
              />
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