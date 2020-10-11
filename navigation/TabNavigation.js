import React from "react";
import {createAppContainer} from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "../screens/Home";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export default ()=>{
    return (
    <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name ="Add" component={View}  listeners={()=>({ tabPress: () => {console.log("Add"); }})}/>
        <Tab.Screen name="Notifications" component={Notifications}/>
        <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
    </NavigationContainer>
    );
}
 