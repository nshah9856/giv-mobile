import React from 'react-native'
import {Card, ScrollView, Text} from 'react-native'
import {Video} from 'expo'

export default CardData = props => (
    <Card height={"90%"}>
        <ScrollView height={"90%"}>
            <Video
                source={{ uri: props.videoURL }}
                shouldPlay
                resizeMode="cover"
                volume={0.0}
                style={{ width, height: 300 }}
            />
            <Text>
                {props.description}
            </Text>
        </ScrollView>
    </Card>
)