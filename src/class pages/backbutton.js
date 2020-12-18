import * as React from 'react';
import { Button, View, Text, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const MyBackButton = ()=> {
  const navigation = useNavigation();
 
  return (
      <View style={{backgroundColor:'#ffffff', color:'#ffffff'}}>
    <Button
      color='black'
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    /></View>
  );
}
export default MyBackButton;