import React,{createContext,useContext,useState} from "react";
import {AsyncStorage} from "react-native";

export const AuthContext = createContext();

export const AuthProvider =({isLoggedIn:isLoggedInProp,children})=>{
    const [isLoggedIn,setIsLoggedIn]=useState(isLoggedInProp);//fasle는 내가 체크했고 로그아웃상태고 true는 체크했고 로그인 이를위해 null사용

    const logUserIn =async () =>{
        try{
          await AsyncStorage.setItem("isLoggedIn","true");
          setIsLoggedIn(true);
        }catch(e){
          console.log(e);
        }
      }
    
      const logUserOut =async ()=>{
        try{
          await AsyncStorage.setItem("isLoggedIn","false");
          setIsLoggedIn(false);
        }catch(e){
          console.log(e);
        }
      }
    

    return <AuthContext.Provider value={{isLoggedIn,logUserIn,logUserOut}}>{children}</AuthContext.Provider>
}

export const useIsLoggedIn=()=>{
    const {isLoggedIn} = useContext(AuthContext);
    return isLoggedIn;
};

export const useLogIn = ()=>{
    const {logUserIn} = useContext(AuthContext);
    return logUserIn;
}

export const useLogOut = ()=>{
    const {logUserOut} = useContext(AuthContext);
    return logUserOut;
}