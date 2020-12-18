import * as React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { Card, Divider,IconButton} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
const CategoriesCard = ( n) => (
   
    <Card>
  <TouchableOpacity   >
  <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  <Card.Title
    title="Card Title"
    titleStyle={{color:'#eeeeee',fontSize:15}}
    style={{ backgroundColor:'#1e272e',paddingTop:0}}
    right={(props) => <Icon{...props} name="chevron-forward-outline" color='white' size={15} style={{padding:0}} />}
    
  />
  </TouchableOpacity>
  <TouchableOpacity >
  <Card.Cover source={{ uri: 'https://content.presspage.com/uploads/1376/c1920_riocelestewaterfalltenoriovolcanonationalparkguanacastecostarica-990097.jpg?94786' }} />
  <Card.Title
    title="Card Title"
    titleStyle={{color:'#eeeeee',fontSize:15}}
    style={{ backgroundColor:'#1e272e'}}
    right={(props) => <Icon{...props} name="chevron-forward-outline" color='white' size={15} style={{padding:0}} />}
  />
  </TouchableOpacity>
  <TouchableOpacity>
  <Card.Cover source={{ uri: 'https://miro.medium.com/max/1000/1*pVAtEbTjgBDqBp0OXMxYww.jpeg' }} />
  <Card.Title
    title="Card Title"
    titleStyle={{color:'#eeeeee',fontSize:15}}
    style={{ backgroundColor:'#1e272e'}}
    right={(props) => <Icon{...props} name="chevron-forward-outline" color='white' size={15} style={{padding:0}} />}
  />
  </TouchableOpacity>
  <TouchableOpacity>
  <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  <Card.Title
    title="Card Title"
    titleStyle={{color:'#eeeeee',fontSize:15}}
    style={{ backgroundColor:'#1e272e'}}
    right={(props) => <Icon{...props} name="chevron-forward-outline" color='white' size={15} style={{padding:0}} />}
  />
  </TouchableOpacity>
  <Divider style={styles.lastdivider}/>
  </Card>
 

);
export default CategoriesCard;

const styles = StyleSheet.create({
  divider: {
      height:10,
      backgroundColor:'#1e272e',
     
  },
  lastdivider: {
    height:20,
    backgroundColor:'#1e272e',
   
},
  TitleContaine:{
  },
 
});