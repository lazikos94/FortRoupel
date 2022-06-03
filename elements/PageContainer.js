import React from 'react'
import { StyleSheet, View,  Platform, BottomNavigation } from 'react-native';
import { SafeAreaView, KeyboardAvoidingView } from 'react-native-safe-area-context';
import {Dimensions, StatusBar} from 'react-native';


import colors from '../context/Styles';

function PageContainer({children,styles}){
    const SCREEN_HEIGHT = Dimensions.get('screen').height;
    const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
    const WINDOW_HEIGHT = Dimensions.get('window').height;

    return(
        <SafeAreaView style = {{...local_styles.main,...local_styles.AndroidSafeArea,...styles}}>
            {children}
        </SafeAreaView>
    )
}


export default PageContainer;

const local_styles = StyleSheet.create({
    main: {
      width: "100%",
      height: "100%",
      color: "#212121",
    },
    AndroidSafeArea: {
      flex: 1,
      backgroundColor: "white",
      paddingBottom: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
  })