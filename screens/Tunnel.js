import React, { useContext, useState, useEffect, useCallback } from "react";
import { View, Text, Linking, TouchableOpacity,ScrollView,Image } from "react-native";
import { useTheme } from "@react-navigation/native";
import useMain from "../context/Main";
import {Dimensions, StatusBar} from 'react-native';
import PageContainer from '../elements/PageContainer';
import PageHeader from "../elements/PageHeader";
import H1 from "../elements/H1";
import { ContentContainer, StyledButton, ButtonText, fonts } from '../context/Styles'
import Accordion from 'react-native-collapsible/Accordion';
import Header from "../elements/Header";

export default function Tunnel({navigation}) {
    const state = useMain();
    const {colors} = useTheme();
  return (
    <PageContainer styles={{ backgroundColor: colors.background, position: "relative" }}>
        <PageHeader styles={{ backgroundColor: colors.background }} navigation={navigation} title={state.language.dictionary.tunnel}/>
        {/* <H1 styles={{ fontSize: fonts.H ,padding: 8, alignSelf: 'center', color: colors.textMuted }}>{state.language.dictionary.tunnel}</H1> */}
          <ScrollView>
          <View style={{height: "100%", backgroundColor: colors.background,flex:1,padding:10,alignItems:'center'}}>

            <Text style={{color:colors.text,fontSize:fonts.H1,textAlign:'center',}}>{state.language.dictionary.tunnelintro}</Text>
            <Text style={{color:colors.text,fontSize:fonts.H2,textAlign:'center'}}>{state.language.dictionary.entrance}</Text>
            <View style={{width:'100%'}}>
            <Image source={require('../assets/tunnel/entrance.jpg')}
                style={{width: 'auto', borderRadius:12,borderWidth:1, height: 260}}
            />
            <Text style={{color:colors.text,fontSize:fonts.H2,textAlign:'center'}}>Η είσοδος της στοάς όπως την βλέπουμε σήμερα</Text>
            <Image source={require('../assets/tunnel/stoaeisodos.jpg')}
                style={{width: 'auto',borderRadius:12,borderWidth:1,  height: 250}}
            />
            </View>
            
            
            </View>
          </ScrollView>

        <Header navigation={navigation}/>
    </PageContainer>
  )
}
