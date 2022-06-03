import React, { useState, useContext,useEffect } from "react";
import { useTheme } from "@react-navigation/native";
import { Text, View, Image, TouchableOpacity } from "react-native";
import useMain from "../context/Main";
import H1 from "./H1";
import { dictionaryList } from "../configs/language/language";


function PageHeader({ children, styles, navigation }) {
  const { colors } = useTheme();

  const state = useMain();

  const local_styles = {
        top: 0,
        left: 0,
        height: '7%',
        width: "100%",
        paddingRight:15,
        paddingLeft:15,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: colors.backgroundDarker,
  };

  useEffect(()=>{
    console.log(state)
  },[])
  
  return (
    <View style={{ ...local_styles }}>
      <TouchableOpacity
            onPress={() => navigation.navigate('Home')}>
        <View
          style={{
          
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            height: "100%"
          }}
        >
          <H1 styles={{color: colors.font, margin: 0, padding: 0}}>{state.language.dictionary.title}</H1>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        if(state.language.userLanguage=='gr'){
          state.setLanguage({
            userLanguage:'en',
            dictionary:dictionaryList['en']
          })
        }else if(state.language.userLanguage=='en'){
          state.setLanguage({
            userLanguage:'gr',
            dictionary:dictionaryList['gr']
          })
        }
      }}>
        <View style={{
           
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            height: "100%"
          }}>
         {state.language.userLanguage=='gr'?
          <Image
          source={require("../assets/gr.png")}
          style={{ width: 45, height: 30}}
          />:<Image
          source={require("../assets/us.png")}
          style={{ width: 45, height: 30}}
          />
         }   
          </View>
      </TouchableOpacity>
    </View>
  );
}

export default PageHeader;
