import React from 'react'
import { StyleSheet, View, StatusBar, Vibration } from 'react-native';
import { Icon } from 'react-native-elements'

class SettingsScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'settings',
            headerBackTitle: null,
        }
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            </View>
        );
    }
}

export default SettingsScreen