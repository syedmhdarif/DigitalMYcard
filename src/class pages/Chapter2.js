import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol} from 'react-native-responsive-screen';

import {FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import Alertbutton2 from '../class pages/alertbutton2';
import MyBackButton from './backbutton';
import HeaderDrawer from '../components/HeaderDrawer';

export default class Chapter2 extends Component{
    
    componentDidMount() {
        loc(this);
      }
      
      componentWillUnMount() {
        rol();
      }
    render(){
        return(
            
            
            <View style={styles.classtext}>

            <Text style=
                {{fontSize:25, fontWeight:'300', marginVertical:20, color:'#666666'}}>
                    Chapter
            </Text>
            <TouchableOpacity
            style={styles.textedit}
            onPress={() => navigation.navigate('StudentAttend')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:8}} >
                    Chapter 8                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:170, color:'#595959' }}> 
                    student: 38/40 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.textedit}
            onPress={() => this.props.navigation.navigate('StudentAttend')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:8}} >
                    Chapter 7                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:170, color:'#595959' }}> 
                    student: 40/40 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.textedit}
            onPress={() => this.props.navigation.navigate('StudentAttend')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:8}} >
                    Chapter 6                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:170, color:'#595959' }}> 
                    student: 36/40 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.textedit}
            onPress={() => this.props.navigation.navigate('StudentAttend')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:8}} >
                    Chapter 5                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:170, color:'#595959' }}> 
                    student: 36/40 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.textedit}
            onPress={() => this.props.navigation.navigate('StudentAttend')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:8}} >
                    Chapter 4                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:170, color:'#595959' }}> 
                    student: 40/40 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.textedit}
            onPress={() => this.props.navigation.navigate('StudentAttend')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:8}} >
                    Chapter 4                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:170, color:'#595959' }}> 
                    student: 36/40 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.textedit}
            onPress={() => this.props.navigation.navigate('StudentAttend')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:8}} >
                    Chapter 3                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:170, color:'#595959' }}> 
                    student: 36/40 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.textedit}
            onPress={() => this.props.navigation.navigate('StudentAttend')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:8}} >
                    Chapter 2                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:170, color:'#595959' }}> 
                    student: 40/40 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.textedit}
            onPress={() => this.props.navigation.navigate('StudentAttend')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:8}} >
                    Chapter 2                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:170, color:'#595959' }}> 
                    student: 40/40 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.textedit}
            onPress={() => this.props.navigation.navigate('StudentAttend')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:8}} >
                    Chapter 1                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:170, color:'#595959' }}> 
                    student: 40/40 
                </Text>
            </TouchableOpacity>
            
            </View>
            
            
        )
    }
}

const styles = StyleSheet.create({
    classtext:{
        
        backgroundColor:'#ffffff',
        alignItems: 'center',
    },
    textedit:{ 
        flexDirection:'row',
        borderBottomWidth:0.4,
        width:wp('90%'),
        marginVertical:5,   
        paddingVertical:15,
        
    
      },
      
      
});