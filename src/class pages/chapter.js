import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol} from 'react-native-responsive-screen';

import {FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import Alertbutton2 from '../class pages/alertbutton2';
import MyBackButton from './backbutton';

export default class Chapter extends Component{

    constructor() {
        super();
        this.state = {
          dataSource: {},
          
        };
      }
    
      componentDidMount() {
        var that = this;
        let items = Array.apply(null, Array(20)).map((v, i) => {
          return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
        });
        that.setState({
          dataSource: items,
        });
      }
    
    componentDidMount() {
        loc(this);
      }
      
      componentWillUnMount() {
        rol();
      }
    render(){
        return(
            <View style={{flex:1,}}>
            <ScrollView>
            
            <View style={styles.classtext}>

            <Text style=
                {{fontSize:25, fontWeight:'300', marginVertical:20, color:'#666666'}}>
                    Date
            </Text>
            <TouchableOpacity
            style={styles.textedit}
            onPress={() => this.props.navigation.navigate('StudentAttend')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:0}} >
                    12/08/2020                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:150, color:'#595959' }}> 
                    student: 38/40 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.textedit}
            onPress={() => this.props.navigation.navigate('StudentAttend')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:0}} >
                    12/08/2020                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:150, color:'#595959' }}> 
                    student: 38/40 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.textedit}
            onPress={() => this.props.navigation.navigate('StudentAttend')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:0}} >
                    12/08/2020                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:150, color:'#595959' }}> 
                    student: 38/40 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.textedit}
            onPress={() => this.props.navigation.navigate('StudentAttend')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:0}} >
                    12/08/2020                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:150, color:'#595959' }}> 
                    student: 38/40 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.textedit}
            onPress={() => this.props.navigation.navigate('StudentAttend')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:0}} >
                    12/08/2020                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:150, color:'#595959' }}> 
                    student: 38/40 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.textedit}
            onPress={() => this.props.navigation.navigate('StudentAttend')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:0}} >
                    12/08/2020                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:150, color:'#595959' }}> 
                    student: 38/40 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.textedit}
            onPress={() => this.props.navigation.navigate('StudentAttend')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:0}} >
                    12/08/2020                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:150, color:'#595959' }}> 
                    student: 38/40 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.textedit}
            onPress={() => this.props.navigation.navigate('StudentAttend')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:0}} >
                    12/08/2020                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:150, color:'#595959' }}> 
                    student: 38/40 
                </Text>
            </TouchableOpacity>



            
            </View></ScrollView>
            <FAB 
                    style={styles.fab}
                    icon="camera"
                    onPress={() => this.props.navigation.navigate('Qrscanner')} 
            />
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
      fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 10,
      },
});