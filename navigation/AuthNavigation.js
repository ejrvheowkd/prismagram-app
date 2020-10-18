import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../screens/Auth/Signup";
import Confirm from "../screens/Auth/Confirm";
import Login from "../screens/Auth/Login";
import AuthHome from "../screens/Auth/AuthHome";

/*const AuthNavigation = createStackNavigator({AuthHome,Signup,Confirm,Login},
    {
        headerMode:"none"
       //initialRouteName:"AuthHome" //앞 객체에서 첫 라우터 화면 무었을 쓸까
    });//스크린 키나 react component넣으면된다.

export default createAppContainer(AuthNavigation);*/

const Tabs = createStackNavigator();

export default ()=>{
    return (
        <Tabs.Navigator>
            <Tabs.Screen name ="AuthHome" component={AuthHome}/>
            <Tabs.Screen name ="Signup" component={Signup}/>
            <Tabs.Screen name ="Confirm" component={Confirm}/>
            <Tabs.Screen name ="Login" component={Login}/>
        </Tabs.Navigator>
    )
}