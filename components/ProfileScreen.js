import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import { Icon, Card} from 'react-native-elements'
import HyperLink from 'react-native-hyperlink';

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
           <ScrollView contentContainerStyle={{padding:10, margin:10}}> 
            { this.state.data !== null && 
              this.state.data.map(element =>
              element.likedOrgs.map(val =>
                  <HyperLink style={{padding: 10}} linkDefault={ true } linkStyle={ { color: '#2980b9'}}><Text>{val}</Text></HyperLink>
                ))
            } 
          </ScrollView>
        )
      }
  }
}

export default ProfileScreen