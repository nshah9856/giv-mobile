import React from 'react'
import { View } from 'react-native';
import { Icon } from 'react-native-elements'

class ProfileScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'profile',
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='person'
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