import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from 'apollo-cache-persist';
import ApolloClient from "apollo-boost";
import apolloClientOptions from './apollo';
import {ApolloProvider} from 'react-apollo-hooks';
import AsyncStorage from "@react-native-community/async-storage";
import {ThemeProvider} from "styled-components";
import styles from './styles';
import NavController from './Components/NavController';
import { AuthProvider } from './AuthContext';
export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [client,setClient] = useState(null);
  const [isLoggedIn,setIsLoggedIn] = useState(null);
  const preLoad = async () => {
    try {
      await Font.loadAsync({
        ...Ionicons.font
      });
      await Asset.loadAsync([require("./assets/favicon.png")]);
      const cache = new InMemoryCache();
      await persistCache({
        cache,
        storage: AsyncStorage,
      });
      const client = new ApolloClient({
      cache,
      ...apolloClientOptions
    });
    const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");//AsyncStorage로 체크한다.localstorage랑 비슷한데 폰에서 동작하는거다
    if(!isLoggedIn||isLoggedIn==="false"){
      setIsLoggedIn(false);
    } 
    else
    {
      setIsLoggedIn(true);
    }
    setLoaded(true);
      setClient(client);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    preLoad();
  }, []);
 
  return loaded&&client&&isLoggedIn!==null?(
    <ApolloProvider client={client}>
      <ThemeProvider theme={styles}>
        <AuthProvider isLoggedIn={isLoggedIn}>
    <NavController/>
    </AuthProvider>
    </ThemeProvider>
    </ApolloProvider>
  ) : (
    <AppLoading />
  );
}