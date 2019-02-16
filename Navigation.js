import NavigationBar from 'react-native-navbar'
import React from 'react'
import { StyleSheet, Text, View, Button, StatusBar} from 'react-native';

const NavBar = props => (
    <View>
        <StatusBar hidden/>
        <NavigationBar
            title={<Text style={styles.title} >Sharity</Text>}
            rightButton={<Button title="Profile" onPress={()=>console.log("Profile pressed!")}></Button>}
            leftButton={<Button title="Settings" onPress={()=>console.log("Settings Pressed!")}></Button>}

        />
    </View>
)

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
    }
})
export default NavBar