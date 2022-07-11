import React from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { useTheme } from "@react-navigation/native";
import useMain from "../context/Main";
import Btn from "./Btn";
import { ContentContainer, StyledButton, ButtonText, fonts } from '../context/Styles'
import { Dimensions, Platform, StatusBar,ScrollView } from "react-native";

function Header({navigation}) {
  const { colors } = useTheme();

  const SCREEN_HEIGHT = Dimensions.get('screen').height; // device height
  const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24; 
  const WINDOW_HEIGHT = Dimensions.get('window').height;  

  const state = useMain();
  const btnStyle = {
    width: "auto",
    justifyContent: "center",
    flex: 1,
    padding: 7,
    margin: 0,
    width:100,
    flexDirection: "row",
    borderRadius: 42,
  };
  const size = useWindowDimensions();
  const width = size.width;
  const height = size.height;

  const navbarHeight = SCREEN_HEIGHT - 83 ;

  let h = navbarHeight

  return (
    
    <View
      style={{
        position: "absolute",
        left: 0,
        bottom:0,
        height: 'auto',
        width: "100%",
        flex: 1,
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        backgroundColor: colors.backgroundDarker,
      }}
    >
    {/* <ScrollView horizontal={true}> */}
       <Btn onPress={() => navigation.navigate('Home')} styles={btnStyle}>
        <Text style={{color:colors.text,fontFamily:fonts.fontFamily1,textAlign:'center'}}>{state.language.dictionary.home}</Text>
      </Btn>
      <Btn onPress={() => navigation.navigate('Tunnel')} styles={btnStyle}>
        <Text style={{color:colors.text,fontFamily:fonts.fontFamily1,textAlign:'center'}}>{state.language.dictionary.tunnel}</Text>
      </Btn>
      <Btn onPress={() => navigation.navigate('Museum')} styles={btnStyle}>
        <Text style={{color: colors.text,fontFamily:fonts.fontFamily1,textAlign:'center'}}>{state.language.dictionary.museum}</Text>
      </Btn>
      <Btn onPress={() => navigation.navigate("Monument")} styles={btnStyle}>
        <Text style={{color: colors.text,fontFamily:fonts.fontFamily1,textAlign:'center'}}>{state.language.dictionary.monument}</Text>
      </Btn>
            {/* <Btn onPress={() => navigation.navigate("Map")} styles={btnStyle}>
        <Text style={{color: colors.text,fontFamily:fonts.fontFamily1,textAlign:'center'}}>{state.language.dictionary.map}</Text>
      </Btn> */}
      {/* </ScrollView> */}
    </View>
  );
}

export default Header;
