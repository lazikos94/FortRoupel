import React, { useState, useContext,useEffect } from "react";
import { useTheme } from "@react-navigation/native";
import { Text, View, Image, TouchableOpacity } from "react-native";
import useMain from "../context/Main";
import H1 from "./H1";
import { dictionaryList } from "../configs/language/language";
import { ContentContainer, StyledButton, ButtonText, fonts } from '../context/Styles'

function PageHeader({ children, styles, navigation,title }) {
  const { colors } = useTheme();

  const state = useMain();

  const local_styles = {
        top: 0,
        left: 0,
        height: '6%',
        width: "100%",
        paddingRight:15,
        paddingLeft:15,
        position:'relative'
        //backgroundColor: colors.backgroundDarker,
  };
  
  return (
    <View style={{ ...local_styles }}>
      <TouchableOpacity  style={{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
            height: "100%"
          }}
            onPress={() => navigation.navigate('Home')}>
        <View>
          <H1 styles={{color: colors.font,fontFamily:fonts.fontFamily1bold}}>{title}</H1>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{
          position:'absolute',
          justifyContent:'center',
          right:0, 
          height: "100%"
          }} onPress={()=>{
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
        <View style={{padding:5}}>
         {state.language.userLanguage=='gr'?
          <Image
          source={require("../assets/gr.png")}
          style={{ width: 45, height: 30}}
          />:<Image
          source={require("../assets/gb.jpg")}
          style={{ width: 45, height: 30}}
          />
         }   
          </View>
      </TouchableOpacity>
    </View>
  );
}

export default PageHeader;
