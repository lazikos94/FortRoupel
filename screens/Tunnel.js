import React, { useContext, useState, useEffect, useCallback } from "react";
import { View, Text, Linking, TouchableOpacity } from "react-native";
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
        <PageHeader styles={{ backgroundColor: colors.background }} navigation={navigation}/>
        <View style={{height: "100%", backgroundColor: colors.background}}>
            <H1 styles={{ fontSize: fonts.H ,padding: 8, alignSelf: 'center', color: colors.textMuted }}>{state.language.dictionary.tunnel}</H1>
        </View>
        <Header navigation={navigation}/>
    </PageContainer>
  )
}
