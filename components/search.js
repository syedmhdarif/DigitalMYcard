// import React, { Component } from 'react';
// import { TextInput, View, ScrollView, Text, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { FlatList} from 'react-native';

// export default class Search extends Component{


// render(){
 
// 	var imagesearch = [];

// 	for(let i = 0; i < 5; i++){

// 		imagesearch.push(
// 			<View key = {i}>

//         <View style={styles.mainbg}>
//           <TouchableOpacity style={styles.box}/>
//           <TouchableOpacity style={styles.box}/>
//           <TouchableOpacity style={styles.box}/>
//         </View>
              
// 				</View>		
// 		)
// 	}
	
// 	return (
// 		<View style={{flex:1}}>
//     <View style={{flexDirection:'row'}}>
//     <TextInput style={styles.inputBox} 
//                 placeholderTextColor="#595959"              
//                 secureTextEntry={true}
//                 underlineColorAndroid='rgba(0,0,0,0)'
//                 placeholder="Search"                               
//                 />
//     <Icon style={{marginHorizontal:20}} name='search' size={40} color='blue' />
//     </View>	
//     <ScrollView>	
// 			{ imagesearch }
//       </ScrollView>	
// 		</View>
// 	)
// }
// }

// const styles = StyleSheet.create({
//   inputBox :{
//     width :wp('80%'),
//     borderBottomWidth:0.4,
//     paddingHorizontal: 10,
//     fontSize: 18,
//     color: '#ffffff',
//     marginVertical:3,
//     marginHorizontal:5
// },
// mainbg:{
//     flexDirection:'row',
//     justifyContent: 'center',
//     alignItems: 'center',
// },
// box:{
//   margin:2,
//   width:wp('32%'),
//   height:hp('18%'),
//   backgroundColor:'blue'
// }
// })

import React, { Component } from 'react';
import { 
  TextInput, View, ScrollView, Text, StyleSheet, 
  TouchableOpacity, Button, Alert, FlatList } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

//import all the components we will need

export default class Search extends Component {
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
      <View style={{flexDirection:'row'}}>
      <TextInput style={styles.inputBox} 
                  placeholderTextColor="#595959"              
                  secureTextEntry={true}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder="Search" 
                  color="black"                              
                  />
      <Icon style={{marginHorizontal:20}} name='search' size={36} color='blue' />
    </View>	
      <ScrollView>
      
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.box}/>
          )}
          //Setting the number of column
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
        />
        
      </ScrollView>
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
}
});



