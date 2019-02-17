import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet, Linking, Image } from 'react-native';
import {Button, Icon, ListItem } from 'react-native-elements';




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
         <View style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'left',
                }}>
          <Button
            icon={
              <Icon
                name="person"
                size={20}
                color="black"
              />
            }
            iconLeft
            title=" Profile"
            type="clear"
            titleStyle={styles.button}
          />

          <Button
            icon={
              <Icon
                name="person"
                size={20}
                color="black"
              />
            }
            iconLeft
            title=" Your Donations"
            type="clear"
            name='heartbeat'
            type='font-awesome'
            titleStyle={styles.button}
          />
            

          <Button
            icon={
              <Icon
                name="payment"
                size={20}
                color="black"
              />
            }
            iconLeft
            title=" Payment"
            type="clear"
            titleStyle={styles.button}
          />

          <Button
            icon={
              <Icon
                name="settings"
                size={20}
                color="black"
              />
            }
            iconLeft
            title=" Settings"
            type="clear"
            titleStyle={styles.button}
          />

          <Button
            icon={
              <Icon
                name="message"
                size={20}
                color="black"
              />
            }
            iconLeft
            title=" Contact"
            type="clear"
            color="black"
            titleStyle={styles.button}
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

const styles = StyleSheet.create({
  button: {
    color: 'black',
    padding: 15,
    textAlign: 'left'
  },
});