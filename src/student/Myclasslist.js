import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol} from 'react-native-responsive-screen';

export default class Myclasslist extends Component{
  render(){
    return(
        <View>
        <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity></View>
    )
  }
}

const styles = StyleSheet.create({
    classtext:{
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#ffffff",
    },
    textedit:{ 
        borderColor:'#595959',
        borderWidth:1,
        borderRadius:4,
        width:wp('95%'),
        paddingHorizontal:35,
        paddingVertical:20,
        marginVertical:5,   
        fontWeight:'900',
        color:'#595959', fontSize:18
    
      },
     
});