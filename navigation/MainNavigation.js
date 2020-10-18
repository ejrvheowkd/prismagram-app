import React from "react";
import {createAppContainer} from "react-navigation";
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

/*const MainNavigation = createStackNavigator({
    PhotoNavigation,TabNavigation
});*/

const Stack = createStackNavigator();

export default ()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TabNavigation" headerMode="none">
            <Stack.Screen name ="TabNavigation" component={TabNavigation}/>
            <Stack.Screen name = "PhotoNavigation" component={PhotoNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

//export default createAppContainer(MainNavigation);