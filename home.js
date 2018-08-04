import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker'

import { AppRegistry, StyleSheet, Text, View,ImageBackground, TouchableOpacity ,Alert} from 'react-native';
const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    //justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    alignItems: 'center'
  },

  SubmitButtonStyle: {

     width: '80%',
      height: '15%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#7D6CDF', 
      borderRadius:30,
      paddingBottom:5,
      marginLeft: '10%',
      marginRight: '10%',
      marginTop: 30,
      paddingTop:5,
      borderWidth: 1,
      borderColor: '#fff',
      
  },

  TextStyle:{
      color:'#fff',
      textAlign:'center',
      fontSize: 20,
      fontWeight: 'bold',
  }

});



class App extends React.Component {
  
  constructor(props){
    super(props);
     
    this.state = {
      date:""
    }
  }

fetchHukamnama = (tdate,navigate) => {
   console.log('going to second screen');
  navigate('SecondScreen',{date:tdate}); 
  
   console.log('going to second screen 2');


}
  
render(){
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd;
} 
if(mm<10){
    mm='0'+mm;
} 
var today = yyyy+'-'+mm+'/'+dd;

const {navigate} = this.props.navigation; 

console.log('state is===='+this.state.date);

  return (

     <View style={styles.MainContainer}>
     <ImageBackground
     source={require('./gt.jpeg')}
     style={{width: '100%', height: '100%'}}
  >
       
       <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .0 }
          onPress={() => navigate('SecondScreen',{date:null})}
       >

            <Text style={styles.TextStyle}> Today's Hukamnama </Text>            
      </TouchableOpacity>
     
      
      <DatePicker
        style={styles.SubmitButtonStyle}
        mode="date"
        placeholder="Search Hukamnama"
        androidMode="spinner"
        format="YYYY-MM-DD"
        minDate="2003-01-01"
        maxDate={today}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {            
            borderWidth:0,

          },
          placeholderText:{
               color:'#fff',
              textAlign:'center',
              borderWidth:0,
              borderColor: '#fff',
              fontSize: 20,
              fontWeight: 'bold'
           }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {          
          this.fetchHukamnama(date,navigate);
        }}        
      />

</ImageBackground>
      </View>

      
      
           

    // <View style={styles.container}>
    //   <Text style={styles.welcome}>
       
    //   </Text>
    //   <Button
    //       onPress={() => navigate('SecondScreen')}
    //       title="Read HUKAMNAMA"
    //     />
    //    <Button
    //       onPress={() => navigate('SecondScreen')}
    //       title="Search HUKAMNAMA"
    //     />
    // </View>
  );
}

}

export default App
