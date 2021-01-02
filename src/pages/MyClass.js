import React, { Component } from 'react';
import { TextInput, View, ScrollView, Text, StyleSheet, TouchableOpacity,color} from 'react-native';
import auth from '@react-native-firebase/auth';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

import MyClass2 from './MyClass2';


import ClassList from './ClassList'; //MyclassList

function MyClass ({navigation}){
    
        return(
            
            <View style={{flex:1,}}>
            <TouchableOpacity style={styles.header} onPress={() => navigation.openDrawer()}>
            <Icon name="reorder-four-outline" color={'#ffffff'} size={20} />
                <Text style={{fontSize:20, fontWeight:'bold', color:'#ffffff', marginHorizontal:15}}>Digital Matric</Text>
            </TouchableOpacity>
                <ScrollView >
                
                    <ClassList/> 
                </ScrollView>

                
                
            </View>
        )
   
}

export default MyClass;

const styles = StyleSheet.create({
    classtext:{
        
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#ffffff",
    },
    textedit:{ 
        borderColor:'#595959',
        borderWidth:1,
        borderRadius:4,
        width:wp('95%'),
        paddingHorizontal:35,
        paddingVertical:20,
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






// import React, { Component } from 'react';
// import { TextInput, View, ScrollView, Text, StyleSheet, TouchableOpacity,color} from 'react-native';
// import auth from '@react-native-firebase/auth';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import Icon from 'react-native-vector-icons/Ionicons';

// function MyClass ({navigation}){
    
//         return(
            
//             <View style={{flex:1,}}>
//             <TouchableOpacity style={styles.header} onPress={() => navigation.openDrawer()}>
//             <Icon name="reorder-four-outline" color={'#ffffff'} size={20} />
//                 <Text style={{fontSize:20, fontWeight:'bold', color:'#ffffff', marginHorizontal:15}}>Digital Matric</Text>
//             </TouchableOpacity>
//                 <ScrollView >
//             <View style={styles.classtext}>
//             <View style={{marginBottom:10, marginTop:10,}}>
//                 <Text style={{fontWeight:'300', fontSize:25, color:'#595959'}}>My Class</Text>
//             </View>
//                 <TouchableOpacity 
//                     onPress={() => navigation.navigate('info4993')} title="info4993">
//                     <Text style={styles.textedit}>
//                         INFO 4993 - SEMESTER 2 2019/2020
//                     </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity 
//                     onPress={() => navigation.navigate('StudentView')} title="StudentView">
//                     <Text style={styles.textedit}>
//                         INFO 4024 - SEMESTER 2 2019/2020
//                     </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity 
//                     onPress={() => navigation.navigate('info4993')} title="info4993">
//                     <Text style={styles.textedit}>
//                         INFO 4993 - SEMESTER 2 2019/2020
//                     </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity 
//                     onPress={() => navigation.navigate('Chapter')} title="info4993">
//                     <Text style={styles.textedit}>
//                         INFO 4024 - SEMESTER 2 2019/2020
//                     </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity 
//                     onPress={() => navigation.navigate('info4993')} title="info4993">
//                     <Text style={styles.textedit}>
//                         INFO 4993 - SEMESTER 2 2019/2020
//                     </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity 
//                     onPress={() =>navigation.navigate('info4993')} title="info4993">
//                     <Text style={styles.textedit}>
//                         INFO 4993 - SEMESTER 2 2019/2020
//                     </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity 
//                     onPress={() => navigation.navigate('info4993')} title="info4993">
//                     <Text style={styles.textedit}>
//                         INFO 4993 - SEMESTER 2 2019/2020
//                     </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity 
//                     onPress={() => navigation.navigate('info4993')} title="info4993">
//                     <Text style={styles.textedit}>
//                         INFO 4993 - SEMESTER 2 2019/2020
//                     </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity 
//                     onPress={() => navigation.navigate('info4993')} title="info4993">
//                     <Text style={styles.textedit}>
//                         INFO 4993 - SEMESTER 2 2019/2020
//                     </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity 
//                     onPress={() => navigation.navigate('info4993')} title="info4993">
//                     <Text style={styles.textedit}>
//                         INFO 4993 - SEMESTER 2 2019/2020
//                     </Text>
//                 </TouchableOpacity>
//                 </View>
//                 </ScrollView>

                
                
//             </View>
//         )
   
// }

// export default MyClass;

// const styles = StyleSheet.create({
//     classtext:{
        
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         backgroundColor: "#ffffff",
//     },
//     textedit:{ 
//         borderColor:'#595959',
//         borderWidth:1,
//         borderRadius:4,
//         width:wp('95%'),
//         paddingHorizontal:35,
//         paddingVertical:20,
//         marginVertical:5,   
//         fontWeight:'900',
//         color:'#595959', fontSize:18
    
//       },
//       header:{
//         flexDirection:'row',
//         width:wp('100%'), height:hp('8%'), backgroundColor:'#199591',
//         shadowColor: "black",
//         shadowOffset: {
//           width: 5,
//           height: 3,
//         },
//         shadowOpacity: 0.27,
//         shadowRadius: 4.65,
//         elevation: 5,
//         alignItems:'center',
//         paddingHorizontal:22
//       }
     
// });


