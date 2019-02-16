import React from 'react'
import { StyleSheet, View, StatusBar, Vibration, Dimensions, ScrollView, Text } from 'react-native';
import { Icon, Card} from 'react-native-elements'
import Swiper from 'react-native-swiper'
import {Video} from 'expo'

const { width, height } = Dimensions.get('window')

const CardComponent = props => (
    <Card containerStyle={{padding:0, margin: 0}} height="100%">
        <ScrollView height="90%%">
            <Video
                source={{ uri: props.VideoURL }}
                shouldPlay
                resizeMode="cover"
                volume={0.0}
                style={{ width, height:500, flex:1 }}
            />
            <Text>{props.description}</Text>
        </ScrollView> 
    </Card>
)

const DisplayData = props => (
    <Swiper           
        dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
        activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
    >
        <CardComponent 
            VideoURL='http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' 
            description='There should be an image here!'
        />
        <CardComponent 
            VideoURL='http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' 
            description='There should be an image here!'
        />
    </Swiper>
)

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
                <DisplayData />
            </View>
        );
    }
}

export default HomeScreen