import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker'

import { AppRegistry, StyleSheet, Text, View, TouchableOpacity ,Alert} from 'react-native';
const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    //justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    alignItems: 'center'
  },

  SubmitButtonStyle: {

    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#00BCD4',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    width:200
  },

  TextStyle:{
      color:'#fff',
      textAlign:'center',
  }

});



class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      date:""
    }
  }

  
render(){
const {navigate} = this.props.navigation;

console.log('state is===='+this.state.date);

  return (

     <View style={styles.MainContainer}>
       
       <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={() => navigate('SecondScreen')}
       >

            <Text style={styles.TextStyle}> Read HUKAMNAMA </Text>            
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={() => navigate('SecondScreen')}
       >

            <Text style={styles.TextStyle}> Search HUKAMNAMA </Text>            
      </TouchableOpacity>
      
      <DatePicker
        style={{width:200,backgroundColor:'#00BCD4', borderRadius:10,
        paddingBottom:5,paddingTop:5,borderWidth: 1,marginLeft:30,marginRight:30,marginTop:10,borderColor: '#fff'}}
        mode="date"
        placeholder="Search HUKAMNAMA"
        androidMode="spinner"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2018-06-01"
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
              borderColor: '#fff'

          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {
          this.setState({date:date})
          navigate('SecondScreen',{date:date})
        }}        
      />


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
