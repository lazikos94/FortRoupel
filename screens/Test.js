import React, { useContext, useState, useEffect, useCallback } from "react";
import { View, Text, Linking, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import useMain from "../context/Main";
import {Dimensions, StatusBar} from 'react-native';
import PageContainer from '../elements/PageContainer';
import PageHeader from "../elements/PageHeader";
import H1 from "../elements/H1";
import { ContentContainer, StyledButton, ButtonText, fonts } from '../context/Styles'

function test({navigation}) {
    return (             

    <ContentContainer>
    <View style={{marginTop: 12, marginBottom: 32, marginLeft: 14}}>
<TouchableOpacity
onPress={() => navigation.navigate('Homepage')}>
    <Text >
   Click Me
    </Text>
</TouchableOpacity>
</View>
    </ContentContainer> );
}

export default test;