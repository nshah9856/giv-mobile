import React from 'react'
import { StyleSheet, View, StatusBar, Vibration } from 'react-native';
import { Icon } from 'react-native-elements'

class HomeScreen extends React.Component {
    static navigationOptions = function(props) {
        return {
            title: 'sharity',
            headerBackTitle: null,

            headerLeft: <Icon onPress={() => 
                props.navigation.navigate('SettingsScreen')}
                name="settings"/>,
            headerLeftContainerStyle: { paddingLeft: 15 },

            headerRight: <Icon onPress={() => 
                props.navigation.navigate('ProfileScreen')}
                name="person"/>,
            headerRightContainerStyle: { paddingRight: 15 },
        }   
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <StatusBar hidden/>
            </View>
        );
    }
}

export default HomeScreen