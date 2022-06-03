import { StyleSheet,Button, Text, View, useWindowDimensions, useColorScheme } from "react-native";
import React, { useEffect, useState } from "react";
import {ContextProvider}  from "./context/Main";
import useMain from "./context/Main";
import Homepage from './screens/Homepage';
import Tunnel from "./screens/Tunnel";
import Museum from "./screens/Museum";
import Monument from "./screens/Monument";
import { darkTheme, lightTheme } from './context/Styles'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigation(){
    const state = useMain();
    const scheme = useColorScheme();


    return(
        <ContextProvider>
            <NavigationContainer theme={scheme==='dark'?darkTheme:lightTheme}>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{ headerShown: false }}
                >      
                   <Stack.Screen name="Home" component={Homepage}/>
                   <Stack.Screen name="Museum" component={Museum}/>
                   <Stack.Screen name="Tunnel" component={Tunnel}/>
                   <Stack.Screen name="Monument" component={Monument}/>
                </Stack.Navigator>
            </NavigationContainer>
        </ContextProvider>
    )
}