import React, { Component } from 'react';
import { TextInput, View, ScrollView, Text, StyleSheet, TouchableOpacity,color} from 'react-native';
import auth from '@react-native-firebase/auth';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const ClassTest = ()=>{

    const navigation = useNavigation();

    function navigateToList() {
        navigation.navigate('Info4993');
    }
    function navigateToList2() {
        navigation.navigate('StudentView');
    }
    
        return(
            
            
        
               
            <View style={styles.classtext}>
            
                <TouchableOpacity 
                    onPress= {()=>navigateToList()}>
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigateToList2()}>
                    <Text style={styles.textedit}>
                        INFO 4024 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress= {()=>navigateToList()}>
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                </View>
         

                
                
           
        )
   
}

export default ClassTest;

const styles = StyleSheet.create({
    classtext:{
        
        justifyContent: 'flex-start',
        alignItems: 'center',
        
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