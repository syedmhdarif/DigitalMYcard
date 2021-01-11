import React, { useState, useEffect, Component } from 'react';
import { TextInput, View, ScrollView, Text, StyleSheet, TouchableOpacity,color,} from 'react-native';
import { Left, Right, Icon } from 'native-base';
import PropTypes from 'prop-types';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import ListTry from './ListTry';

import auth from '@react-native-firebase/auth';
import { db } from '../config/db';

const Anothertest = ({route, navigation})=> {

  
  const [myClassList, setmyClassList] = useState('');

  
 

  /* 2. Get the param */
   const { itemId, otherParam } = route.params;

   var myJSON = JSON.stringify(itemId);
  var myJSONN = JSON.stringify(otherParam);

  


  // const [code, setCode]= useState('myJSON');
  // const [code2, setCode2] = useState('myJSONN');
   
  console.log(myJSONN)
  console.log(itemId)


  var user = auth().currentUser;
    useEffect(() => {
        const myClassRef = db.ref( 'Classreff/' + itemId + '_'+ otherParam+ '/studentlist');
        myClassRef.on("value",(snapshot) => {
            const myClassF = snapshot.val();
            console.log(snapshot);
            const myClassList=[];
            for (let id in myClassF){
                myClassList.push(myClassF[id]);
               
            }
            setmyClassList(myClassList);
            console.log(myClassList);

        });
    },[]);
    
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {myJSON}</Text>
      <Text>itemId: {itemId}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      

      <Text  >
                {myClassList 
                            ? myClassList.map((Student, index) => 
                            <ListTry Student={Student} key={index}/>)
                        : ''}
      </Text>      
      
      
    </View>
  );
}

export default Anothertest;


  
// import {  Button } from 'react-native';  
  
// export default class Anothertest extends Component {  
   
//     render() {  
//         {/*Using the navigation prop we can get the 
//               value passed from the previous screen*/}  
//         const { navigation } = this.props;  
//         const user_name = navigation.getParam('userName', 'NO-User');  
//         const other_param = navigation.getParam('otherParam', 'some default value');  
//         return (  
//             <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
//                 <Text style={{ marginTop: 16,fontSize: 20,}}>  
//                     This is Profile Screen and we receive value from Home Screen  
//                 </Text>  
//                 <Text style={styles.textStyle}>Class code: {JSON.stringify(user_name)}</Text>  
//                 <Text style={styles.textStyle}>Other Param: {JSON.stringify(other_param)}</Text>  
//                 <View style={styles.buttonStyle}>  
//                 {/* <Button  
//                     title="Go back"  
//                     onPress={() => this.props.navigation.goBack()}  
//                 />   */}
//                 </View>  
//             </View>  
//         );  
//     }  
// }  

// const styles = StyleSheet.create({  
//     textStyle: {  
//         fontSize: 23,  
//         textAlign: 'center',  
//         color: '#f00',  
//     },  
  
//     buttonStyle:{  
//         width: "93%",  
//         marginTop: 50,  
//         backgroundColor: "red",  
//     } ,
//     classtext:{
        
//       justifyContent: 'flex-start',
//       alignItems: 'center',
//       backgroundColor: "#ffffff",
//   },
//   textedit:{ 
//     flexDirection:'row',
//       borderColor:'#595959',
//       borderWidth:1,
//       borderRadius:4,
//       width:wp('95%'),
//       paddingHorizontal:20,
//       paddingVertical:15,
//       marginVertical:5,   
//       fontWeight:'900',
//       color:'#595959', fontSize:18
  
//     },
//     header:{
//       flexDirection:'row',
//       width:wp('100%'), height:hp('8%'), backgroundColor:'#199591',
//       shadowColor: "black",
//       shadowOffset: {
//         width: 5,
//         height: 3,
//       },
//       shadowOpacity: 0.27,
//       shadowRadius: 4.65,
//       elevation: 5,
//       alignItems:'center',
//       paddingHorizontal:22
//     } 
// });  
        



