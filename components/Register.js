// const doRegister = await auth().createUserWithEmailAndPassword(email, password);


import React, { Component } from 'react';
import auth from '@react-native-firebase/auth';
import { View, Text, StyleSheet,TextInput,TouchableOpacity, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Register extends Component {
    state={
        email:'',
        password:'',
        error:'',
        loading:false
    }

    onBottomPress = () =>{
        auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(this.onLoginSuccess)
        .catch(err => {
            this.setState({
                error:'Invalid email or password'
            })
        })

    
    }
    onAnonymPress = () =>{
        auth().signInAnonymously()
        .then(this.onLoginSuccess)
        .catch(err => {
            this.setState({
                error:'Invalid email or password'
            })
        })

    
    }
    onLoginSuccess =  () =>{
        this.setState({
            error:'',
            loading:false
        })
    }


    render() {
        return (
            <View style={styles.container}>
                 <TextInput
                    placeholder="email" 
                    style={styles.input} 
                    value={this.state.email}
                    onChangeText={email=> this.setState({email})}
                     />

                 <TextInput 
                    placeholder="password" 
                    style={styles.input}
                    secureTextEntry
                     value={this.state.password}
                     onChangeText={password => this.setState({password})}
                     />


                 <TouchableOpacity  onPress={this.onBottomPress} >
                 <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                    >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Register</Text>
                </LinearGradient>
                 </TouchableOpacity>
                 
                 <TouchableOpacity style={styles.buttonAnom} onPress={this.onAnonymPress} >
                     <Text style={{color:"#3B3B98", alignSelf:"center"}}>Sign as anonymous</Text>
                 </TouchableOpacity>

                 <Text style={styles.errorText} >
                         {this.state.error}
                </Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        
        padding:20
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,.5)',
        paddingLeft:10,
        marginBottom:15,
        borderRadius:5,
        fontSize:15,
    
    },
    errorText:{
        fontSize:25,
        color:'red',
        alignSelf:'center',
        marginTop:10

    },
    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:20
    },
    buttonContainer:{
        backgroundColor:'#3B3B98',
        padding:15,
        borderRadius:8
    },
    buttonAnom:{
        marginTop:20,
        padding:15,
        borderRadius:8
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

//make this component available to the app
export default Register;