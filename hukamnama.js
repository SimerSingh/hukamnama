import React, { Component } from 'react';
import { Container,Header,Card,CardItem,Spinner, Title,Fab,View, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import {
  Platform,
  FlatList,
  StyleSheet,
  Linking,
  TouchableOpacity
} from 'react-native';

export default class AnatomyExample extends Component {

static navigationOptions = {
    title: 'Hukamnama',
  };

constructor(props){

 super(props)
     
    
    this.state={
        hukamnamaObj:[],
        tdate:'',
        nanakshahi:'',
        loaded:false,
        visible: true,
        active: 'false',
        currentTime: 0
    }
}



componentDidMount(){
  let hdate = null;
  let arr = null;
  let api_url = 'https://api.gurbaninow.com/v2/hukamnama/today';

  if(this.props.navigation){
      console.log("Param date in hukamnama is ---- :"+this.props.navigation.state.params.date);
      hdate=this.props.navigation.state.params.date;
      if(hdate != null){
        arr = hdate.split("-");
        api_url='https://api.gurbaninow.com/v2/hukamnama/'+arr[0]+'/'+arr[1]+'/'+arr[2];
      } 
    }
    console.log('calling : '+api_url);
fetch(api_url)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          hukamnamaObj: data,
          tdate: data.date.gregorian,
          nanakshahi:data.date.nanakshahi.punjabi,
          loaded: true,
          visible: false,
        })
      }).catch(function(err) {
          console.log(err);
        });
} 

  render() {
    
    let english;
    var punjabi='';
    var whattext = "";
    
    if(this.state.loaded == true){
       punjabi = Object.values(this.state.hukamnamaObj.hukamnama).map((val, index, arr) => {
             return (val.line.gurmukhi.unicode + "\n");
         })
        english = Object.values(this.state.hukamnamaObj.hukamnama).map((val, index, arr) => {
             return (val.line.translation.english.default + "\n");
         })
     }
    var appText = "\n\nInstall Hukamnama app to read Daily Hukamana\n"+"https://play.google.com/store/apps/details?id=com.simer.hukamnama";
    var dayDate = this.state.tdate.day +" "+ this.state.tdate.date +" "+ this.state.tdate.month +","+" "+ this.state.tdate.year 
                      +"\n" + this.state.nanakshahi.day +" "+ this.state.nanakshahi.date +" "+ this.state.nanakshahi.month +","+" "+ this.state.nanakshahi.year;
     whattext = "Hukamnama\n\n" +dayDate + "\n\n" +punjabi + "\n" + english + appText;
    const loading = <Spinner />;
    const datesv = <Card>
                      <CardItem header>
                      <Grid>
                      <Col>
                      <Text> {this.state.tdate.day} {this.state.tdate.date} {this.state.tdate.month},{this.state.tdate.year} 
                      {"\n"}{this.state.nanakshahi.day} {this.state.nanakshahi.date} {this.state.nanakshahi.month},{this.state.nanakshahi.year}
                      </Text>
                      </Col>                      
                      </Grid>
                      </CardItem>
                    </Card>;
    return (
     
      
      <Container style={{ backgroundColor: 'pink'}}>            
        <Content>
        {this.state.visible ? loading : datesv}
        <Card transparent>
            <CardItem header>
              <Text>Punjabi</Text>
            </CardItem>
            <CardItem>
              <Body>
              
               
                 <View style={{flexDirection:'row', flexWrap:'wrap',paddingLeft: 20}}>      
                    <Text style={{fontWeight:'bold'}}>{punjabi}</Text>
                 </View>

                 
              </Body>
            </CardItem>
         </Card>

         <Card>
            <CardItem header>
              <Text>English</Text>
            </CardItem>
            <CardItem>
              <Body>
                
                 <View style={{flexDirection:'row', flexWrap:'wrap',paddingLeft: 20}}>      
                    <Text style={{fontWeight:'bold'}}>{english}</Text>
                 </View>                 
              </Body>
            </CardItem>
         </Card>    
           <Fab
            active={this.state.active}
            direction="down"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="topRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button onPress={() => Linking.openURL('whatsapp://send?text='+whattext)} style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
          </Fab>
        </Content>
        
        
      </Container>
    );
  }


 renderPersonRow(person){
    return(
    <View style={{flexDirection:'row', flexWrap:'wrap',paddingLeft: 20}}>      
            <Text style={{fontWeight:'bold'}}>{person.line.gurmukhi.unicode}</Text>
   </View>

    )
   }
   renderPersonRowEnglish(person){
    return(
    <View style={{flexDirection:'row', flexWrap:'wrap',paddingLeft: 20}}>      
            <Text style={{fontWeight:'bold'}}>{person.line.translation.english.default}</Text>
   </View>

    )
   }

}


const styles = StyleSheet.create({
 mainContainer:{
    flex:1,
    backgroundColor:'#F5FCFF',
    height:24,
 },
backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
},
 headerContainer: {
     flex: 1,
     flexDirection: "row",
     justifyContent: "space-between",
     backgroundColor: "#075e54",
     alignItems:"center",
  },
  leftHeaderContainer: {
      alignItems: "flex-start",
      flexDirection: "row",
   },
   rightHeaderContainer: {
      alignItems: "flex-end",
      flexDirection: "row",
    },
    tabsContainer: {
      backgroundColor:'#075e54',
      justifyContent:"space-between",
      alignItems: "flex-start",
      flexDirection: "row",
      paddingRight:10
     },
   contentContainer: {
      flex: 6,
   },
   logoText: {
       color: "white",
       fontWeight: "bold",
       fontSize: 16,
       alignItems: "flex-start",
       marginLeft: 10
    },
    tabsText: {
       color: "white",
       fontWeight: "bold",
       fontSize: 16,
       alignItems: "flex-start",
       marginLeft: 10
     },
  listItemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-start"
  },
  callerDetailsContainer: {
    flex: 4,
    justifyContent: "center",
    borderBottomColor: "rgba(92,94,94,0.5)",
    borderBottomWidth: 0.25,
  },
  callerDetailsContainerWrap: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row"
  },
  nameContainer: {
    alignItems: "flex-start",
    flex: 1
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  callIconContainer: {
    flex: 1,
    alignItems: "center",

  },
  initStyle: {
    borderRadius: 30,
    width: 60,
    height: 60
  }
});