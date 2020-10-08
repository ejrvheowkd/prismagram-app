import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from 'apollo-cache-persist';
import ApolloClient from "apollo-boost";
import apolloClientOptions from './apollo';
import {ApolloProvider} from 'react-apollo-hooks';
import AsyncStorage from "@react-native-community/async-storage";
import {ThemeProvider} from "styled-components";
import styles from './styles';
export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [client,setClient] = useState(null);
  const [isLoggedIn,setIsLoggedIn]=useState(null);//fasle는 내가 체크했고 로그아웃상태고 true는 체크했고 로그인 이를위해 null사용
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
    if(isLoggedIn===null||isLoggedIn===false){
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
  return loaded&&client&& isLoggedIn !== null ? (
    <ApolloProvider client={client}>
      <ThemeProvider theme={styles}>
    <View>
    {isLoggedIn===true? <Text>I'm in</Text>:<Text>I'm out</Text>}
    </View>
    </ThemeProvider>
    </ApolloProvider>
  ) : (
    <AppLoading />
  );
}