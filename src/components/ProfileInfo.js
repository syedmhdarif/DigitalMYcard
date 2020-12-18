


import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/Ionicons';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';

import LogoProfile from '../student/LogoProfile';


const ProfileInfo =({navigation}) =>{

  const { colors } = useTheme();
    return(
     
      <View >
      <TouchableOpacity style={styles.header} onPress={() => navigation.openDrawer()}>
            <Icon name="reorder-four-outline" color={'#ffffff'} size={20} />
                <Text style={{fontSize:20, fontWeight:'bold', color:'#ffffff', marginHorizontal:15}}>Digital Matric</Text>
            </TouchableOpacity>
      <ScrollView>
      <LinearGradient 
      style={{flex: 1,}}
      colors={[ '#199591','#21c4bf', '#51e1dd']}> 
           
           <LogoProfile/>
        
              
      <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.profileview, {
              backgroundColor: '#ffffff'
            }]}
        >                     
      <View >
        <View style={{marginTop:'18%'}}>
            <Text style={{color:'black', alignSelf:'center', fontSize:20}}>
            syedmhdarif
            </Text>
            <Text style={{color:'black', alignSelf:'center'}}>
            Haiii helloo anyeong this is my bio
            </Text>
            <Text style={{color:'black', alignSelf:'center', marginTop:30,}}>
            Identity Card/Pasport No : 970903035851
            </Text>
            <Text style={{color:'black', alignSelf:'center'}}>
            Gender : MALE
            </Text>
            <Text style={{color:'black', alignSelf:'center'}}>
            Birthday: 03-SEP-97
            </Text>
            <Text style={{color:'black', alignSelf:'center'}}>
            Religion : ISLAM
            </Text>
            <Text style={{color:'black', alignSelf:'center'}}>
            arif.sayed@live.iium.edu.my
            </Text>
            
        </View>

            {/* <TouchableOpacity style={styles.logout} onPress={()=> auth().signOut()} >
            <Text style={{color:'white',}} >Logout</Text>
            </TouchableOpacity> */}
         
            
            <Text style={{textAlign:'center'}}>this is the end</Text>
        </View>
        
        </Animatable.View>
        
        </LinearGradient>
    </ScrollView>
    </View>
   
    )}

const styles = StyleSheet.create({
  container: {
    
    
    
  },

  logout: {
    marginVertical:10,
    
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    height:hp('5%'),
    backgroundColor:'#ff7675',
    width:wp('20%'),
    borderRadius: 10,
    
  },
  backprofile:{
    height:hp('30%'), width:wp('80%'),
    position:'absolute',
    backgroundColor:'white',
    padding:150,
    paddingHorizontal:170,
    marginTop:300,
    borderRadius:10,
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 5,
  
  },
  backprofile2:{
    alignItems :'center',
    
    padding:200,
    
    marginTop:('20%'),
    elevation:4,
    height:hp('100%'),
  },
  profileview:{
    width:wp('94%'), height:hp('80%'),   
    alignSelf:'center',
    borderTopStartRadius:35,
    borderTopRightRadius:35,
    
    shadowColor: "black",
    shadowOffset: {
      width: 40,
      height:5,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 4,
    marginTop:('25%'),
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
export default ProfileInfo;






// import React, { Component } from 'react';
// import { Container, Content, Footer, FooterTab, Button, Icon, Text, Form, Item, Label, Input, Picker } from 'native-base';
// import { Actions } from 'react-native-router-flux';
// import { db } from '../config/db';
// import { updateStudent } from '../services/DataServices';

// let studentsRef = db.ref('/students');

// export default class ProfileInfo extends Component {
//   constructor(){
//    super();
//    this.state = {
//      students: [],
//      name: null,
//      matricno: null,
//      major: null,
//      year: 0,
//      status: null,
//      postID: null
//    }
//   }

//   componentDidMount() {
//     let query = studentsRef.orderByChild("matricno").equalTo(this.props.matricno);
//       query.once('value', (snapshot) => {
//       let data = snapshot.val();
//           if(data){
//             let firebaseData = Object.values(data);
//             this.setState({students: firebaseData},()=>{
//               this.state.students.map((element) => {
//                 this.setState({
//                   name: element.name,
//                   matricno: element.matricno,
//                   major: element.major,
//                   year: element.year,
//                   status: element.status
//                 });
//               });
//             });
//           }
//      });
//   }

//   setName = (value) =>{
//     this.setState({ name: value });
//   }

//   setMatricNo = (value) =>{
//     this.setState({ matricno: value });
//   }

//   selectMajor = (value) => {
//     this.setState({ major: value });
//   }

//   selectYear = (value) => {
//     this.setState({ year: value });
//   }

//   selectStatus = (value) => {
//     this.setState({ status: value });
//   }

//   updateData = () =>{
//     if(this.state.name && this.state.matricno && this.state.major && this.state.year && this.state.status){
//       if(isNaN(this.state.matricno)){
//         Alert.alert('Status','Invalid Matric No!');
//       }
//        else{
//          updateStudent(this.state.name, this.state.matricno, this.state.major, this.state.year, this.state.status);
//        }
//     } else{
//        Alert.alert('Status','Empty Field(s)!');
//     }
//   }

//   render() {
//     return (
//       <Container>
//         <Content padder>
//         <Text style={{textAlign: "center", height: 40, fontWeight: "bold", marginTop: 20}}>Student Details</Text>
//         <Text>{this.state.postID}</Text>
//         <Form>
//         <Item fixedLabel last>
//               <Label>Name</Label>
//               <Input onChangeText={this.setName} value={this.state.name} />
//         </Item>
//         <Item fixedLabel last>
//               <Label>Matric No</Label>
//               <Input onChangeText={this.setMatricNo} value={this.state.matricno} disabled={true} />
//         </Item>
//         <Item fixedLabel picker last>
//           <Label>Major</Label>
//           <Picker 
//           mode="dropdown" 
//           iosIcon={<Icon name="arrow-down" />}
//           style={{ width: undefined }}
//           placeholder="Select Major"
//           placeholderStyle={{ color: "#bfc6ea" }}
//           placeholderIconColor="#007aff"
//           selectedValue={this.state.major}
//           onValueChange={this.selectMajor}
//           Title="Major"
//           >
//           <Picker.Item label="BIT" value="BIT" />
//           <Picker.Item label="BCS" value="BCS" />
//           </Picker>
//         </Item>

//         <Item fixedLabel picker last>
//           <Label>Year</Label>
//           <Picker 
//           mode="dropdown" 
//           iosIcon={<Icon name="arrow-down" />}
//           style={{ width: undefined }}
//           placeholder="Select Year"
//           placeholderStyle={{ color: "#bfc6ea" }}
//           placeholderIconColor="#007aff"
//           selectedValue={this.state.year}
//           onValueChange={this.selectYear}
//           >
//           <Picker.Item label="1" value="1" />
//           <Picker.Item label="2" value="2" />
//           <Picker.Item label="3" value="3" />
//           <Picker.Item label="4" value="4" />
//           </Picker>
//         </Item>

//         <Item fixedLabel picker last>
//           <Label>Status</Label>
//           <Picker 
//           mode="dropdown" 
//           iosIcon={<Icon name="arrow-down" />}
//           style={{ width: undefined }}
//           placeholder="Select Status"
//           placeholderStyle={{ color: "#bfc6ea" }}
//           placeholderIconColor="#007aff"
//           selectedValue={this.state.status}
//           onValueChange={this.selectStatus}
//           >
//           <Picker.Item label="Active" value="Active" />
//           <Picker.Item label="Inactive" value="Inactive" />
//           </Picker>
//         </Item>
//         </Form>

//           <Button block last style={{marginTop: 50}} onPress={this.updateData}>
//             <Text style={{fontWeight: "bold"}}>Update</Text>
//           </Button>
//         </Content>
//         <Footer>
//           <FooterTab>
//             <Button vertical onPress={() => {Actions.ListScreen();}}>
//               <Icon name="list-box" />
//               <Text>Student List</Text>
//             </Button>
//           </FooterTab>
//         </Footer>
//       </Container>
//       );
//   }
// }