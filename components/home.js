
import React, { Component } from 'react';
import { FAB } from 'react-native-paper';

import { View, StyleSheet,ScrollView } from 'react-native';
import CategoriesCard from './CategoriesCard';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class home extends Component{
    render(){
    return (
        
        <View style={styles.container}>
          <ScrollView style={styles.cardContainer}>
            <View>
              <CategoriesCard/>
            </View>
           
            </ScrollView>
            <FAB 
                    style={styles.fab}
                    icon="camera"
                    onPress={() => console.log('Pressed')}
            />
             
        </View>
          
       
    );
    
}}

// define your styles
const styles = StyleSheet.create({

    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 10,
      },
    container: {
        flex: 1,
        padding:0,
     
        backgroundColor:'#1e272e',

    },
    cardContainer:{
      padding:10,
      width:wp('100%'),
    },

});
