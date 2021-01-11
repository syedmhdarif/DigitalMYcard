import React, { Component } from 'react';
import { TextInput, ScrollView,  StyleSheet, TouchableOpacity,color} from 'react-native';
import { Text, ListItem, Left, Right, Icon, View } from 'native-base';
import PropTypes from 'prop-types';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class StudentList extends Component {

  static propTypes = {
      Students: PropTypes.array.isRequired
  };



  render() {

    // const { navigate } = this.props.navigation;
    // function navigateToList() {
    //   this.props.navigation.navigate('Anothertest', {  
    //     userName: Students.classcode,  
    //     otherParam: '101',  
    // })  }
    // function navigateToList2() {
    //     navigation.navigate('StudentView');
    // }

    return(
      this.props.Students.map((data, index) => {
        return(
          <View key={index} >

          <View style={styles.textedit} >
            <View   style={{flexDirection:'column'}}>
              <Text style={{fontSize:18, color:'#595959'}}>{data.classname}</Text>
              <Text style={{fontSize:18, color:'#595959'}}>{data.classcode} - Section {data.section}</Text>
            
            </View>
           
            <Right>
            <TouchableOpacity
             onPress= {()=>navigateToList()} 
              >
            <Icon color='#595959' name="arrow-forward" />
            </TouchableOpacity>
            </Right>
              
            
          </View>
    
          

          </View>
        )
      })
    )
  }
}

const styles = StyleSheet.create({
    classtext:{
        
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#ffffff",
    },
    textedit:{ 
      flexDirection:'row',
        borderColor:'#595959',
        borderWidth:1,
        borderRadius:4,
        width:wp('95%'),
        paddingHorizontal:20,
        paddingVertical:15,
        marginVertical:5,   
        fontWeight:'900',
        color:'#595959', fontSize:18
    
      },
      header:{
        flexDirection:'row',
        width:wp('100%'), height:hp('8%'), backgroundColor:'#199591',
        shadowColor: "black",
        shadowOffset: {
          width: 5,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 5,
        alignItems:'center',
        paddingHorizontal:22
      }
     
});



// import { View } from "native-base";
// import {Text} from 'react-native';
// import React, { Component } from "react";

// export default class StudentList extends Component{
//   render(){
//     return(
//       <View><Text>HAIII</Text></View>

//     );
//   }
// }