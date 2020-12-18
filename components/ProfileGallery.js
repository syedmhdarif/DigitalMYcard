import React, { Component } from 'react';
import { 
  TextInput, View, ScrollView, Text, StyleSheet, 
  TouchableOpacity, Button, Alert, FlatList } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

//import all the components we will need

export default class ProfileGallery extends Component {
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

  render() {
    return (
      
      <View style={{alignItems:'center', }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.box}/>
          )}
          //Setting the number of column
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
        />
        </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
  
    
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  inputBox :{
    width :wp('80%'),
    borderBottomWidth:0.4,
    paddingHorizontal: 10,
    fontSize: 18,
    color: '#ffffff',
    marginBottom:3,
    marginHorizontal:5
},
mainbg:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
},
box:{
  margin:2,
  width:wp('30%'),
  height:hp('18%'),
  backgroundColor:'#d9d9d9'
}
});