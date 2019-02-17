import React from 'react'
import { View } from 'react-native';
import { Icon } from 'react-native-elements'

class ProfileScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'settings',
    drawerIcon: ({ tintColor }) => (
      <Icon
        name='settings'
        color='black'
      />
    ),
  };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            </View>
        );
    }
}

export default ProfileScreen