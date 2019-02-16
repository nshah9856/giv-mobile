import React from 'react'
import { StyleSheet, Text, View, Button, StatusBar, Vibration } from 'react-native';
import { Header , Icon} from 'react-native-elements'

const Settings = props => (
    <View>
        <Icon 
            name='menu'
            underlayColor='transparent'
            color='#fff'
            onPress= {
                () => {
                    Vibration.vibrate(10)
                }
            }
        />
    </View>
)

const Profile = props => (
    <View>
        <Icon 
            name='person'
            underlayColor='transparent'
            color='#fff'
            onPress= {
                () => {
                    Vibration.vibrate(10)
                }
            }
        />
    </View>
)

const NavBar = props => (
    <View>
        <StatusBar hidden/>
        <Header
        leftComponent={<Settings/>}
        centerComponent={{ text: 'Sharity', style: { color: '#fff' } }}
        rightComponent={<Profile/>}
        />
    </View>
)

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
    }
})
export default NavBar