import React, { useContext, useState, useEffect, useCallback } from "react";
import { View, Text, Linking, TouchableOpacity,Image,ScrollView } from "react-native";
import { useTheme } from "@react-navigation/native";
import useMain from "../context/Main";
import {Dimensions, StatusBar} from 'react-native';
import PageContainer from '../elements/PageContainer';
import PageHeader from "../elements/PageHeader";
import H1 from "../elements/H1";
import { ContentContainer, StyledButton, ButtonText, fonts } from '../context/Styles'
import Accordion from 'react-native-collapsible/Accordion';
import Header from "../elements/Header";

function Museum({navigation}) {
    const state = useMain();
    const {colors} = useTheme();

    

    return ( 
        <PageContainer styles={{ backgroundColor: colors.background, position: "relative" }}>
        <PageHeader styles={{ backgroundColor: colors.background }} navigation={navigation} title={state.language.dictionary.museum}/>
        {/* <H1 styles={{ fontSize: fonts.H ,padding: 8, alignSelf: 'center', color: colors.textMuted }}>{state.language.dictionary.museum}</H1> */}
          <ScrollView>
          <View style={{height: "100%", backgroundColor: colors.background,flex:1,padding:10,alignItems:'center'}}>

            <Text style={{color:colors.text,fontSize:fonts.H1,textAlign:'center',}}>{state.language.dictionary.museumintro}</Text>
            <Text style={{color:colors.text,fontSize:fonts.H2,textAlign:'center'}}>{state.language.dictionary.museumentrance}</Text>
            <View style={{width:'100%'}}>
            <Image source={require('../assets/museum/museum.jpg')}
                style={{width: 'auto', height: 250}}
            />
            </View>
            
            
            </View>
          </ScrollView>

        <Header navigation={navigation}/>
    </PageContainer>
     );
}

export default Museum;