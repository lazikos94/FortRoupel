import { useState, useEffect } from 'react';
import {View,Text} from 'react-native';
import AppLoading from 'expo-app-loading';
import Navigation from "./Navigation";
import useFonts from './hooks/useFonts';

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };
  if (!IsReady) {    return (
    <AppLoading
      startAsync={LoadFonts}
      onFinish={() => SetIsReady(true)}
      onError={() => {}}
    />
  );}
    return (
      <Navigation/>
  );
 
}
