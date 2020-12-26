import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Chapter from './chapter';
import Student from './student';
import Record from './record';

const Tab = createBottomTabNavigator();

const Info4993=()=> {
    return (
      
        <Tab.Navigator initialRouteName='Chapter'
            
            tabBarOptions={{
            activeTintColor: '#ffffff',
            inactiveTintColor:'#b3b3b3',
            labelStyle: {  fontWeight: 'bold' },          
            style: { backgroundColor: '#199591' },
          }}>
            <Tab.Screen name="Date" component={Chapter}                
              options={{
              tabBarLabel: 'Date',
              tabBarIcon: ({ color }) => (
             <Icon name="reader" color={color} size={20} />
                ),}}     
            />
            <Tab.Screen name="Student" component={Student} 
                options={{
              tabBarLabel: 'Student',
              tabBarIcon: ({ color, size }) => (
             <Icon name="man" color={color} size={20} />),}}
            />
            <Tab.Screen name="Record" component={Record} 
                options={{
              tabBarLabel: 'Record',
              tabBarIcon: ({ color, size }) => (
             <Icon name="radio-button-on" color={color} size={20} />),}}
            />
        </Tab.Navigator>
        
    )
}
export default Info4993;



//mureed
// import React, { Component } from 'react';
// import { Container, Content, Footer, FooterTab, Button, Icon, Text, Form, Item, Label, Input, Picker } from 'native-base';
// import { Actions } from 'react-native-router-flux';
// import { db } from '../config/db';
// import { updateStudent } from '../services/DataServices';

// let studentsRef = db.ref('/students');

// export default class info4993 extends Component {
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