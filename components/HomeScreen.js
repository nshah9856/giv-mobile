import React from 'react'
import { StyleSheet, View, StatusBar, Dimensions, ScrollView, Text, TouchableOpacity, Share} from 'react-native';
import { Icon, Card} from 'react-native-elements'
import Swiper from 'react-native-animated-swiper'
import {Video} from 'expo'
import * as Animatable from 'react-native-animatable';

const { width } = Dimensions.get('window')

class CardComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={heartColor:'black', moneyColor:'black', shareColor: 'black'}
        this.user_email = props.user_email
    }

    onShare = async () => {
        try {
          const result = await Share.share({
            url:
              this.props.website
          })
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

    handleViewRef = ref => this.view = ref;
  
    handleSharePress = () => {
        this.setState({shareColor:'#59c3c3'})
        this.onShare()
    }

    moneyPressed = () => {
        this.setState({moneyColor:'#b1fcbe'})
        this.moneyView.wobble()
        this.moneyView.stopAnimation()
    }

    handleHeartPress = () => {
        this.setState({heartColor:"#e75a7c"})
        this.view.bounce()
        ///Mutation here!
        fetch(`https://hackuci19-231913.appspot.com/graphql?query=mutation{
            updateUserOrgs(email:"${this.user_email}", tempOrg:"${this.props.website}"){
                tempOrg
                email
            }
          }`, {method: 'POST'})
        .then(data => data.json())
        .then(data => 
          {
            console.log(data)
            // data.data.updateUserOrgs ? data.data.updateUserOrgs.email && data.data.updateUserOrgs.tempOrg ? continue : Alert.alert("Error", "Please input the elements") :  Alert.alert("Error", "Please input the elements") 
          }
        )
        .done()
    }

    render(){
    return (
        <View style={{padding: 25, backgroundColor:'#ffffff'}}>
            <Card contentContainerStyle={{padding:0, margin:0}} containerStyle={{padding:0, margin: 0, borderColor:'#ffffff'}}  borderRadius={25} height="100%">
                <ScrollView contentContainerStyle={{padding:0, margin:0}} borderRadius={25} border="0" showsVerticalScrollIndicator={false}  bounces={false}> 
                    <Video
                        source={{ uri: this.props.VideoURL }}
                        shouldPlay
                        resizeMode={Video.RESIZE_MODE_STRETCH}
                        volume={0.0}
                        style={{ width, height:500}}
                        isLooping
                    />
                    <Text style={styles.item}>{this.props.title}</Text>
                    <Text style={{ padding: 15, fontSize: 20, color: 'black',}}>{this.props.description}</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                        <Icon
                            name='share'
                            color={this.state.shareColor}
                            size={40}
                            onPress={this.handleSharePress}
                        />

                        <Animatable.View ref={(ref) => this.moneyView = ref} animation="pulse" easing="linear" iterationCount="infinite" >
                            <Icon
                                name='monetization-on'
                                color={this.state.moneyColor}
                                size={40}
                                reverse
                                onPress={this.moneyPressed}
                            />
                        </Animatable.View>

                        <Animatable.View ref={this.handleViewRef}>
                        <Icon
                            name='favorite'
                            color={this.state.heartColor}
                            size={40}
                            onPress={this.handleHeartPress}
                        />
                        </Animatable.View>
                    </View>
                </ScrollView> 
            </Card>
        </View>
        )}
    }

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
        return fetch('https://hackuci19-231913.appspot.com/graphql?query={organizations{title url description website}}')
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
                    this.state.data.map(({title,url, description, website}) => {
                    return <CardComponent 
                        VideoURL={url}
                        title={<Text style={styles.item}>{title}</Text>}
                        description={<Text>{description}</Text>}
                        website = {website}
                        user_email = {this.props.user_email}
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

    profileHandler = () => {
        this.props.navigation.navigate('Profile', {user_email: this.props.navigation.getParam('USER_EMAIL')})
    }

    clickHandler = () => {
        // this.props.navigation.setParams({user_email: this.props.navigation.getParam('USER_EMAIL')})
        this.props.navigation.openDrawer();
    }

    render() {
        const { navigation } = this.props;
        return (
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <DisplayData user_email={navigation.getParam('USER_EMAIL')}/>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={this.clickHandler}
                        style={styles.TouchableOpacityStyle}
                    >
                        <Icon
                            raised
                            name='menu'
                            color='#b1fcbe'
                            style={styles.FloatingButtonStyle}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={this.profileHandler}
                        style={styles.TouchableOpacityStyleRight}
                    >
                        <Icon
                            raised
                            name='heartbeat'
                            type='font-awesome'
                            color='#b1fcbe'
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
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        left: 35,
        top: 35,
    },
    TouchableOpacityStyleRight: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        left: 95,
        top: 35,
    },
    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
});