import React, { Component } from 'react';
import { 
  TextInput, View, ScrollView, Text, StyleSheet, 
  TouchableOpacity, Button, Alert, FlatList } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {FAB} from 'react-native-paper';

//import all the components we will need

export default class StudentView extends Component {
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
      <View style={styles.MainContainer}>
      
      <ScrollView>
       <View style={{alignItems:'center'}}>
            <Text style=
                {{fontSize:25, fontWeight:'300', marginVertical:20, color:'#666666'}}>
                    Date
            </Text>
       </View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <TouchableOpacity
            style={styles.textedit}
            onPress={() => this.props.navigation.navigate('StudentAttend')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:0}} >
                    12/08/2020                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:180, color:'#595959' }}> 
                    10.30AM 
                </Text>
            </TouchableOpacity>
          )}
          //Setting the number of column
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
        />
        
      </ScrollView>
      <FAB 
                    style={styles.fab}
                    icon="camera"
                    onPress={() => this.props.navigation.navigate('Qrscanner')} 
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    
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
  width:wp('32%'),
  height:hp('18%'),
  backgroundColor:'#b3b3b3'
},
textedit:{ 
    flexDirection:'row',
    borderBottomWidth:0.4,
    width:wp('90%'),
    marginVertical:5,   
    paddingVertical:15,
    alignSelf:'center'

  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 10,
  },
});