import React from 'react'
import { StyleSheet, View, StatusBar, Dimensions, ScrollView, Text, TouchableOpacity} from 'react-native';
import { Icon, Card} from 'react-native-elements'
import Swiper from 'react-native-animated-swiper'
import {Video} from 'expo'

const { width } = Dimensions.get('window')

const CardComponent = props => (
    <View style={{padding: 25, backgroundColor:'#ffffff'}}>
    <Card contentContainerStyle={{padding:0, margin:0}} containerStyle={{padding:0, margin: 0, borderColor:'#ffffff'}}  borderRadius={25} height="100%">
        <ScrollView contentContainerStyle={{padding:0, margin:0}} borderRadius={25} border="0" showsVerticalScrollIndicator={false} bounces={false}> 
            <Video
                source={{ uri: props.VideoURL }}
                shouldPlay
                resizeMode="cover"
                volume={0.0}
                style={{ width, height:500, flex:1 }}
                isLooping
            />
            <Text style={styles.item}>{props.title}</Text>
        </ScrollView> 
    </Card>
    </View>
)

class DisplayData extends React.Component {

    constructor(){
        super()
        this.state = {data: null, loading: true}
    }
    componentDidMount() {
        this.setState({loading:true})
        this.fetchData()
        .then(data => 
            data.json())
        .then(data => {
            this.setState({data:data.data.organizations, loading:false})
        }
        )
    }

    fetchData(){
        return fetch('https://hackuci19-231913.appspot.com/graphql?query={organizations{title url}}')
    }
    render(){
        if (this.state.loading === true){
            return(
                <View>
                    <Text>
                        Loading....
                    </Text>
                </View>
            )
        }
        else{
        return(
            <Swiper>
                {
                    this.state.data.map(({title,url}) => {
                    return <CardComponent 
                        VideoURL={url}
                        title={<Text style={styles.item}>{title}</Text>}
                        key = {1}
                    />
                    })
                }
            </Swiper>
            )
        }
    }
}

class HomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'home',
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='home'
            color='black'
          />
        ),
      };

    clickHandler = () => {
        this.props.navigation.openDrawer();
    }

    render() {
        return (
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <StatusBar hidden/>

                    <DisplayData />

                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={this.clickHandler}
                        style={styles.TouchableOpacityStyle}
                    >
                        <Icon
                            raised
                            name='menu'
                            color='black'
                            style={styles.FloatingButtonStyle}
                        />
                    </TouchableOpacity>
                </View>
        );
    }
}

export default HomeScreen

const styles = StyleSheet.create({
    item: {
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        left: 15,
        top: 15,
    },
    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
});