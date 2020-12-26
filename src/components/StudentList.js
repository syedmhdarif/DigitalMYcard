import React, { Component } from 'react';
import { Text, ListItem, Left, Right, Icon, View } from 'native-base';
import PropTypes from 'prop-types';

export default class StudentList extends Component {

  static propTypes = {
      Students: PropTypes.array.isRequired
  };



  render() {
    return(
      this.props.Students.map((data, index) => {
        return(
          <ListItem key={index} >

          <Left>
          <View>
            <Text style={{fontSize:17, color:'#595959'}}>{data.classname}</Text>
           
          </View>
          </Left>

          <Left>
          <View>
            <Text style={{fontSize:18, color:'#595959'}}>{data.classcode}</Text>
          </View>
          </Left>
          
          <Right>
          <Icon name="arrow-forward" />
          </Right>

          </ListItem>
        )
      })
    )
  }
}



// import { View } from "native-base";
// import {Text} from 'react-native';
// import React, { Component } from "react";

// export default class StudentList extends Component{
//   render(){
//     return(
//       <View><Text>HAIII</Text></View>

//     );
//   }
// }