import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";
import { createStackNavigator } from '@react-navigation/stack';

const Ptab= createMaterialTopTabNavigator();

const PhotoTabs =()=>{
    return (
        <Ptab.Navigator>
          <Ptab.Screen name="SelectPhoto" component={SelectPhoto} />
          <Ptab.Screen name="TakePhoto" component={TakePhoto} />
        </Ptab.Navigator>
        );
}
/*export default createStackNavigator({
  PhotoTabs,UploadPhoto
});*/
const StackTabs =createStackNavigator();
export default ()=>{
  return (
    <StackTabs.Navigator>
      <StackTabs.Screen name="PhotoTabs" component ={PhotoTabs}/>
      <StackTabs.Screen name = "UploadPhoto" component = {UploadPhoto}/>
    </StackTabs.Navigator>
  );
  };