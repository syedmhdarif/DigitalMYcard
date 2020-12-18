import React, { Component } from 'react';
import auth from '@react-native-firebase/auth';
import { TextInput, View, Text, StyleSheet, TouchableOpacity,} from 'react-native';
import 'react-native-gesture-handler';


export default class Form extends Component{

    state={
        email:'',
        password:'',
        error:'',
        loading:false
    }

    onBottomPress = () =>{
        auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(this.onLoginSuccess)
        .catch(err => {
            this.setState({
                error:'ERROR !!'
            })
        })

    
    }
    onLoginSuccess =  () =>{
        this.setState({
            error:'',
            loading:false
        })
    }

    render(){
        return(
            <View style={styles.container} >
            <View>
            <TextInput style={styles.inputBox} 
                placeholderTextColor="#ffffff"
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="email"
                value={this.state.email}
                onChangeText={email=> this.setState({email})} />

            <TextInput style={styles.inputBox} 
                placeholderTextColor="#ffffff"              
                secureTextEntry={true}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="password" 
                value={this.state.password}
                onChangeText={password => this.setState({password})}
                /></View>

            <TouchableOpacity style={styles.button}
             onPress={this.onBottomPress}>
                <Text style={styles.loginbutton}>LOGIN</Text>
            </TouchableOpacity>

            <Text style={styles.errorText} >
                         {this.state.error}
                     </Text>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    container : {
        
        
        justifyContent: 'center',
        alignItems: 'center',  
        margin:'3%'           
    },

   inputBox :{
       width :300,
       backgroundColor :'rgba(255, 255, 255, 0.3)',
       borderRadius :10,
       
       paddingHorizontal: 10,
       fontSize: 18,
       color: '#ffffff',
       marginVertical:10,
   },
   button:{
    justifyContent:'center',
    backgroundColor :'#004d66',
    borderRadius :10,
    paddingVertical:10,
    marginTop:20,
    marginBottom:30,  
    width :300,

   },

   loginbutton:{
        
        justifyContent:'center',
        textAlign:'center',       
        fontSize:16,
        fontWeight:'500',
        color: '#ffffff'
                
   },
   errorText:{
    fontSize:25,
    color:'red',
    alignSelf:'center',
    marginTop:10

},
   
    
})

// export default class Form extends Component {

//     constructor () {
//       super ();
//       this.state = {
//         text: "",
//         vowels: 0,
//         consonant: 0
//       }
//     }
//     render(){
//         return(
//             <view>
//                 <TextInput 
//                     multiline = {true}
//                     numberOfLines = {6}
//                     maxLength = {130}
//                     placeholder="type your text"
//                     onChangeText={(text) => this.setState({text})}
//                     />
//             </view>
//         )
//     }

// }