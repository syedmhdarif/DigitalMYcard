import React, { Component, useState, useEffect } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol} from 'react-native-responsive-screen';

import {FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Left, Right } from 'native-base';
import ActionButton from 'react-native-action-button';

import Alertbutton2 from '../class pages/alertbutton2';
import MyBackButton from './backbutton';
import AllDatelist from './AllDatelist';
import { db } from '../config/db';
import auth from '@react-native-firebase/auth';

import { useNavigation } from '@react-navigation/native';
import Statuspage from './Statuspage';
var user = auth().currentUser;





export default function Chapter({route}){ 
    const [myClassList, setmyClassList] = useState();
    const [liststatus, setmyliststatus] = useState('');
    const [getname3,setgetname3] = useState('');

    const { itemId, otherParam } = route.params;

    const navigation = useNavigation();

        function navigateToList() {
            navigation.navigate('Qrscanner')  }
        function navigateToList2() {
            navigation.navigate('Record',{
                itemId : itemId,  
                otherParam : otherParam,  
            });
        }


    useEffect(() =>{
        const getName = db.ref('Students/'+ user.uid + '/profile');
        getName.once("value",(snapshot) =>{
    
            
            setgetname3(snapshot.val());
            
            
        });console.log(getname3.name);
        console.log(getname3.matricnum);
        console.log(getname3);
    },[]);

    
    useEffect(() => {
        const myClassRef = db.ref(  'Classreff/' + itemId + '_'+ otherParam+'/Attendance/');
        myClassRef.on("value",(snapshot) => {
            const myClassF = snapshot.val();
            console.log(snapshot);
            const myClassList=[];
            for (let id in myClassF){
                myClassList.push(myClassF[id]);
               
            }
            setmyClassList(myClassList);
            console.log(myClassList);
            console.log(itemId);
            console.log(otherParam);

        });
    },[]);


    // useEffect(() => {
    //     const myClassRef = db.ref(  'Classreff/' + itemId + '_'+ otherParam+'/Attendance/' + getname3.matricnum);
    //     myClassRef.on("value",(snapshot) => {
    //         const myClassF = snapshot.val();
    //         console.log(snapshot);
    //         const liststatus=[];
    //         for (let id in myClassF){
    //             liststatus.push(myClassF[id]);
               
    //         }
    //         setmyliststatus(liststatus);
    //         console.log(liststatus)

    //     });
    // },[]);
    
    
        return(
            <View style={{flex:1,backgroundColor:'#ffffff'}}>
            <ScrollView>
            
            <View >

            <View style={styles.classtext}>

                <Text style=
                    {{fontSize:25, fontWeight:'300', marginVertical:20, color:'#666666', textAlign:'center'}}>
                        Date 
                </Text>

                
            </View>
            
            
            <View style= {{marginHorizontal:20}}>

            
            <Text>
                    {myClassList 
                    ? myClassList.map((Class, index) => <AllDatelist Class={Class} key={index} 
                   
                    />)
                    : ''}
            </Text>

            <Text>  </Text>
            {/* <Text>
                    {liststatus 
                    ? liststatus.map((Statuss, index) => <Statuspage Statuss={Statuss} key={index} 
                       
                    />)
                    : ''}
            </Text> */}
            </View> 
            


            
            </View>
            <TouchableOpacity style={{ marginLeft:310, marginVertical:25, position:'absolute'}}
            onPress={() => navigateToList2()}>
                <Icon style={{fontSize:25}} color='#666666' name="people"></Icon>
            </TouchableOpacity>
            </ScrollView>

            {/* <FAB.Group
                open={open}
                icon={open ? 'calendar-today' : 'plus'}
                actions={[
                    { icon: 'camera', onPress: () => navigateToList() },
                    {
                    icon: 'star',
                    label: 'Join Group',
                    onPress: () => navigateToList2(),
                    },
                    
                ]}
                onStateChange={onStateChange}
                onPress={() => {
                    if (open) {
                    // do something if the speed dial is open
                    }
                }}
                /> */}
            
                <FAB 
                    style={styles.fab}
                    icon="camera"
                    onPress={() => navigateToList()} 
                />
            </View>
        )
    }


const styles = StyleSheet.create({
    classtext:{
        
        
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
      fab2: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 80,
      },
      actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
});




{/* <TouchableOpacity
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
            </TouchableOpacity> */}
