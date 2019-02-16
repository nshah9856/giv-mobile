import React from 'react'
import { StyleSheet, View, StatusBar, Vibration, Dimensions, ScrollView, Text } from 'react-native';
import { Icon, Card} from 'react-native-elements'
import Swiper from 'react-native-swiper'
import {Video} from 'expo'

const { width, height } = Dimensions.get('window')
import { Query } from "react-apollo";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";


const CardComponent = props => (
    <Card containerStyle={{padding:0, margin: 0}} height="100%">
        <ScrollView height="90%">
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
        return fetch('https://hackuci19-231913.appspot.com/graphql?query={organizations{title}}')
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
        <Swiper           
            dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
            activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
        >
            {
                this.state.data.map(({title}) => {
                    console.log(title)
                return <CardComponent 
                    VideoURL='https://00e9e64bac232cb4b71c3670fca29427453645e9e448dba80c-apidata.googleusercontent.com/download/storage/v1/b/sharity-video/o/worldvision.mp4?qk=AD5uMEvmb8N7A2kyukvZ_5wERHkyP10OTG9Ty87m-XG2Ca8ggTr17bw8222mvweMYm20L6uzXZ7n-N_z0Ih_Gz1xZwLEKS19hPHvndU7cjzoNb1oZCPgwxtSn6SY6XwIBwp2tocq4lwxOZXFq7CGtcxJPwBAbdLKc-z-Yxx5DRrOZnSciYSy2Mn7rFYJaOhytzwfaeZiTCijHF4XOLolGrVQNF-wxYPN67VKkHQfR_JNR5bvHB9_AD8O9tezBfH_zNyfo9-F_u3n1hlJBS3T-uzmC9l3Wq3rtBDcR7QQE5TZUHlYJonpV6EOeHLG6xgZ4BvOid8O9Pgo3akCv8_dpXHok_9U31zFI5vZP6V31PMVctLd_-fkr4fkqqbR4aDAvbto2YgYZiZoJWZSYcGv7VCREQ9gD0T-tmSjyBr9VdyyE2jKAaPQEnbejbXX30dRLt19z1NYfKZl-NCycPmlFG5ZPzGfHg6PvzuyjmRuR38UiWY6IoZ-PLld6czuIeJLvPBCy_2TpknUY_jk0RH4jYuFFIf7ViNjVn2JFv4CNzWUwo55ve3V0LernY9RK7PeOwDEVTDbO_p2QQKXKu6xwqBDoasOBKLU8UWcpZyOQ_RPoCIDB96RTtJggKicvgA7kGn1X8BoQFfX9Iccg63-osrqvkITsZZ-zSALDU2SEIEKiKqUeNsI8jOELpiscpU3VXoXb0TV4569C9nhMQtwAtZLHg00Keu2F0JqpZ7uMWXwYdWJerk_s2kpyn7szp9c3I56qSKZVEDe9AkDPPJCBAYUC5TMJlN5Gw' 
                    description={<Text>{title}</Text>}
                    key = {1}
                 />
                 /* Video source: World vision: https://donate.worldvision.org/give/hand-drilled-well*/
                }
                )
            }
        </Swiper>
        )
        }
    }
}

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