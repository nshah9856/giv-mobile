import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import { Icon, Card} from 'react-native-elements'

const RenderData = props => (
  <View>
{  props.data.forEach(element => {
    element.likedOrgs.map(val => 
        <Card
            title={<Text>{val}</Text>}
            key = {1}
        />
    )

  })}
  </View>
)

class ProfileScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'settings',
    drawerIcon: ({ tintColor }) => (
      <Icon
        name='settings'
        color='black'
      />
    ),
  };

  constructor(props){
    super(props)
    this.state = {data: null, loading: true}
    const { navigation } = props;
    this.email = navigation.getParam('user_email')
  }
  componentDidMount() {
      fetch('https://hackuci19-231913.appspot.com/graphql?query={users{email likedOrgs}}')
      .then(data => 
          data.json())
      .then(data => {
          if (data.data){
            this.setState({data: data.data.users.filter(({email}) => email === this.email), loading:false})
          }
        }
      )
  }

  render() {
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
        var i = 0;
        return(
           <ScrollView contentContainerStyle={{padding:0, margin:0}} borderRadius={25} border="0" showsVerticalScrollIndicator={false}> 
            { this.state.data !== null && 
              this.state.data.map(element =>
              element.likedOrgs.map(val =>
                <Card
                    title={<Text>{val}</Text>}
                    key = {i++}
                />
                ))
            } 
          </ScrollView>
        )
      }
  }
}

export default ProfileScreen