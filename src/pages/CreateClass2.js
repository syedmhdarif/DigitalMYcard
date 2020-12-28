// import React, { Component } from 'react';
// import { TextInput, View, ScrollView, Text, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import DropDownPicker from 'react-native-dropdown-picker';

// import Alertbutton from '../class pages/alertbutton';

// export default class CreateClass2 extends Component{
//     constructor(props) {
//         super(props);

//         this.state = {
//             country: null,
//             city: null,
//             sem: []
//         };
//     }
//     changeCountry(item) {
//         let city = null;
//         let sem;
//         switch (item.value) {
//             case 'fr':
//                 sem = [
//                     {label: 'semester 1', value: 'sem1'},
//                     {label: 'semester 2', value: 'sem2'},
//                     {label: 'semester 3', value: 'sem3'}
//                 ];
//             break;
//             case 'es':
//                 sem = [
//                     {label: 'semester 1', value: 'sem1'},
//                     {label: 'semester 2', value: 'sem2'},
//                     {label: 'semester 3', value: 'sem3'}
//                 ];
//             break;
//         }

//         this.setState({
//             city,
//             sem
//         });
//     }

//     changeCity(item) {
//         this.setState({
//             city: item.value
//         });
//     }



//     render(){
//         return(
            
//             <View style={styles.classtext}>
//             <Text style=
//                 {{fontSize:25, fontWeight:'300', marginTop:10, color:'#666666'}}>
//                     Create Class
//             </Text>
//                 <TextInput style={styles.inputBox} 
//                 placeholderTextColor="#595959"
//                 underlineColorAndroid='rgba(0,0,0,0)'
//                 placeholder="class name"
//                 color='black'
//                  />

//             <TextInput style={styles.inputBox} 
//                 placeholderTextColor="#595959"              
//                 underlineColorAndroid='rgba(0,0,0,0)'
//                 placeholder="class code" 
//                 color='black'
                
//                 />
//             <TextInput style={styles.inputBox} 
//                 placeholderTextColor="#595959"              
                
//                 underlineColorAndroid='rgba(0,0,0,0)'
//                 placeholder="section" 
//                 color='black'
                
//                 />
//             <>
//                 <DropDownPicker
//                     items={[
//                         {label: '2018/2019', value: 'es'},
//                         {label: '2019/2020', value: 'fr'},
//                         {label: '2020/2021', value: 'es'},
//                     ]}
//                     defaultNull
//                     placeholder="Select Year"
//                     containerStyle={{marginVertical:8,height:hp('9%'), width:wp('90%')}}
//                     onChangeItem={item => this.changeCountry(item)}
//                 />
//                 <DropDownPicker
//                     items={this.state.sem}
//                     defaultNull={this.state.city === null}
//                     placeholder="Select Semester"
//                     containerStyle={{marginVertical:8,height:hp('9%'), width:wp('90%')}}
//                     onChangeItem={item => this.changeCity(item)}
//                 />
//             </>
//             <Alertbutton/>
            
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     inputBox :{
//         width :wp('90%'),
//         borderBottomWidth:0.4,
//         paddingHorizontal: 10,
//         fontSize: 18,
//         color: '#ffffff',
//         marginVertical:8,
//     },
//     classtext:{
        
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// })










//..............................................................................................................................................

import React, { Component } from 'react';
import { TextInput, View, ScrollView, Text, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import { addClass, addClassreff } from '../services/DataServices';

import Alertbutton from '../class pages/alertbutton';

export default class CreateClass2 extends Component{

   
    constructor(props) {
        super(props);

        this.state = {
            country: null,
            city: null,
            sem: [],
            
            classcode: null,
            classname: null,
            section: null,
            matricnum : null,
            // year: null ,
            // semester : null,
            
        };
    }
    

    setClassname = (value) =>{
        this.setState({ classname: value });
      }
    
      setClasscode = (value) =>{
        this.setState({ classcode: value });
      }
    
      setSection = (value) => {
        this.setState({ section: value });
      }

      setMatricnum = (value) => {
        this.setState({ matricnum: value });
      }

    //   selectYear = (value) => {
    //     this.setState({ year: value });
    //   }

    //   selectSemester = (value) => {
    //     this.setState({ semester: value });
    //   }
    
    //   saveData = () =>{
    //     if(this.state.classname && this.state.classcode && this.state.section && this.state.year && this.state.semester){
    //       if(isNaN(this.state.classcode)){
    //         Alert.alert('Status','Invalid Class Code!');
    //       }
    //        else{
    //          addClass(this.state.classname, this.state.classcode, this.state.section, this.state.year, this.state.semester);
    //          Alert.alert('Status','Inserted!');
    //        }
    //     } else{
    //        Alert.alert('Status','Empty Field(s)!');
    //     }
    //   }

    

    saveData = () =>{
        if(this.state.classcode &&  this.state.classname  && this.state.section && this.state.matricnum ){
          if(isNaN(this.state.section)){
            Alert.alert('Status','Invalid section!');
          }
          
           else{
             addClass(this.state.classcode, this.state.classname, this.state.section, this.state.matricnum);
             addClassreff(this.state.classcode, this.state.section, this.state.matricnum);
             Alert.alert('Status','Inserted!');
           }
        } else{
           Alert.alert('Status','Empty Field(s)!');
        }
      }





    render(){
        return(
            
            <View style={styles.classtext}>
            
            <Text style=
                {{fontSize:25, fontWeight:'300', marginTop:10, color:'#666666'}}>
                    Create Class
            </Text>

            
                <TextInput style={styles.inputBox} 
                placeholderTextColor="#595959"
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="class name"
                color='black'
                onChangeText={this.setClassname}
                 />

            <TextInput style={styles.inputBox} 
                placeholderTextColor="#595959"              
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="class code" 
                color='black'
                onChangeText={this.setClasscode}
                
                />
            <TextInput style={styles.inputBox} 
                placeholderTextColor="#595959"              
                
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="section" 
                color='black'
                onChangeText={this.setSection}
                
                />

            <TextInput style={styles.inputBox} 
                placeholderTextColor="#595959"              
                
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Matric Number" 
                color='black'
                onChangeText={this.setMatricnum}
                
                /> 
           
            <TouchableOpacity style={styles.button} onPress={this.saveData}>
            <Text style={styles.loginbutton}>create</Text>
          </TouchableOpacity>
            {/* <Alertbutton/> */}
            
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox :{
        width :wp('90%'),
        borderBottomWidth:0.4,
        paddingHorizontal: 10,
        fontSize: 18,
        color: '#ffffff',
        marginVertical:8,
    },
    classtext:{
        
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        justifyContent:'center',
        backgroundColor :'#1f2e2e',
        borderRadius :4,
        paddingVertical:10,
        marginTop:30, 
        marginBottom:10,
        width :wp('90%'),
    
       },
       loginbutton:{
        
        justifyContent:'center',
        textAlign:'center',       
        fontSize:16,
        fontWeight:'500',
        color: '#ffffff'
                
   },
})


//..............................................................................................................................................


// import React, { Component } from 'react';
// import { TextInput, View, ScrollView, Text, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// import DropDownPicker from 'react-native-dropdown-picker';
// import { addClass } from '../services/DataServices';

// import Alertbutton from '../class pages/alertbutton';

// const CreateClass2 = (props) => {

//     const {
//         classname, 
//         setClassName, 
//         classcode, 
//         setClassCode, 
//         section,
//         setSection,
//         matricnum,
//         setMatricNum,
//         handleForm,
      
    
//        } = props;

//            setClassname = (value) =>{
//         this.setState({ classname: value });
//       }
    
//       setClasscode = (value) =>{
//         this.setState({ classcode: value });
//       }
    
//       setSection = (value) => {
//         this.setState({ section: value });
//       }

//       setMatricnum = (value) => {
//         this.setState({ matricnum: value });
//       }


    
//         return(
            
//             <View style={styles.classtext}>
            
//             <Text style=
//                 {{fontSize:25, fontWeight:'300', marginTop:10, color:'#666666'}}>
//                     Create Class
//             </Text>

            
//                 <TextInput style={styles.inputBox} 
//                 placeholderTextColor="#595959"
//                 underlineColorAndroid='rgba(0,0,0,0)'
//                 placeholder="class name"
//                 color='black'
//                 value={classname}
//                 onChangeText={(value) => setClassName(value)}
//                  />

//             <TextInput style={styles.inputBox} 
//                 placeholderTextColor="#595959"              
//                 underlineColorAndroid='rgba(0,0,0,0)'
//                 placeholder="class code" 
//                 color='black'
//                 value={classcode}
//                 onChangeText={(value) => setClassCode(value)}
                
//                 />
//             <TextInput style={styles.inputBox} 
//                 placeholderTextColor="#595959"              
                
//                 underlineColorAndroid='rgba(0,0,0,0)'
//                 placeholder="section" 
//                 color='black'
//                 value={section}
//                 onChangeText={(value) => setSection(value)}
                
//                 />

//             <TextInput style={styles.inputBox} 
//                 placeholderTextColor="#595959"              
                
//                 underlineColorAndroid='rgba(0,0,0,0)'
//                 placeholder="matric number" 
//                 color='black'
//                 value={matricnum}
//                 onChangeText={(value) => setMatricNum(value)}
                
//                 />

        
//             <TouchableOpacity style={styles.button} onPress={handleForm}>
//             <Text style={styles.loginbutton}>create</Text>
//           </TouchableOpacity>
//             {/* <Alertbutton/> */}
            
            
//             </View>
//         )
//     }
//     export default CreateClass2;


// const styles = StyleSheet.create({
//     inputBox :{
//         width :wp('90%'),
//         borderBottomWidth:0.4,
//         paddingHorizontal: 10,
//         fontSize: 18,
//         color: '#ffffff',
//         marginVertical:8,
//     },
//     classtext:{
        
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     button:{
//         justifyContent:'center',
//         backgroundColor :'#1f2e2e',
//         borderRadius :4,
//         paddingVertical:10,
//         marginTop:30, 
//         marginBottom:10,
//         width :wp('90%'),
    
//        },
//        loginbutton:{
        
//         justifyContent:'center',
//         textAlign:'center',       
//         fontSize:16,
//         fontWeight:'500',
//         color: '#ffffff'
                
//    },
// })




