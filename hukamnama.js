import React, { Component } from 'react';
import { Container,Header,Card,CardItem,Spinner, Title,Fab,View, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import {
  Platform,
  FlatList,
  AppState,
  StyleSheet,
  Linking,
  TouchableOpacity
} from 'react-native';

export default class AnatomyExample extends Component {



constructor(props){
 super(props)
    this.handleAppStateChange = this.handleAppStateChange.bind(this);    
    
    this.state={
        hukamnamaObj:[],
        tdate:'',
        nanakshahi:'',
        loaded:false,
        visible: true,
        active: true,
        currentTime: 0
    }
}



componentDidMount(){
fetch('https://api.gurbaninow.com/v2/hukamnama/today')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          hukamnamaObj: data,
          tdate: data.date.gregorian,
          nanakshahi:data.date.nanakshahi.punjabi,
          loaded: true,
          visible: false,
        })
      });

AppState.addEventListener('change', this.handleAppStateChange);
}

/*componentWillUnmount(){
 AppState.addEventListener('change', this.handleAppStateChange );

}
*/
handleAppStateChange(appState){
  
    if(appState === 'background'){
        alert('back');
      console.log('app is in bakground') ;
    }
}  

  render() {
    console.log("Param date in hukamnama is ---- :"+this.props.navigation.state.params.date);
    let english;
    var punjabi='';
    if(this.state.loaded == true){
    // alert('hi');
       english = Object.values(this.state.hukamnamaObj.hukamnama).map((val, index, arr) => {
             return (val.line.gurmukhi.akhar + "\n");
             //punjabi.concat(val.line.gurmukhi.akhar)
         })
       console.log(english);
       console.log(punjabi); 
     }

     
     /*Working code
     english =Object.values(this.state.hukamnamaObj.hukamnama).map((val, index, arr) => {
             console.log(arr[index].line.translation.english.default);
             return arr[index].line.translation.english.default;
         })*/
    

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
     
      
      <Container>        
           <Fab
            active={this.state.active}
            direction="down"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="topRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
          </Fab>

          
        <Content>
                
          

        {this.state.visible ? loading : datesv}
        <Card>
            <CardItem header>
              <Text>Punjabi</Text>
            </CardItem>
            <CardItem>
              <Body>
              
               
                 <View style={{flexDirection:'row', flexWrap:'wrap',paddingLeft: 20}}>      
                    <Text style={{fontWeight:'bold'}}>{english}</Text>
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
                
                  <FlatList
                        data={this.state.hukamnamaObj.hukamnama}
                        renderItem={({item}) => (this.renderPersonRowEnglish(item))}
                        keyExtractor={person => person.line.firstletters.akhar}/> 

                 
              </Body>
            </CardItem>
         </Card>    
          
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