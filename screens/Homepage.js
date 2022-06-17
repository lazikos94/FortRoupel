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
import Icon from 'react-native-vector-icons/FontAwesome';

function Homepage({navigation}) {
    const state = useMain();
    const {colors} = useTheme();

    const [activeSections, setActiveSections] = useState([]);
    const [collapsed, setCollapsed] = useState(true);
    const [multipleSelect, setMultipleSelect] = useState(false);

    const SCREEN_HEIGHT = Dimensions.get('screen').height; // device height
    const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24; 
    const WINDOW_HEIGHT = Dimensions.get('window').height;

    const SECTIONS = [

        {
          title: state.language.dictionary.opentime,
          content: state.language.dictionary.morning+": 09:00 - 13:00\n"+state.language.dictionary.afternoon+": 17:00 - 20:00",
        },
        {
          title: state.language.dictionary.contact,
          content: state.language.dictionary.number+": +30 23210 95100\n"+state.language.dictionary.email+": 10spz@army.gr",
        },
        {
          title:state.language.dictionary.services,
          content: state.language.dictionary.canteen+", "+state.language.dictionary.parking
        },   
        {
          title: state.language.dictionary.cost,
          content: state.language.dictionary.costamount,
        },
      ];

    const toggleExpanded = () => {
        setCollapsed(!collapsed);
    };
    
    const setSections = (sections) => {
        setActiveSections(sections.includes(undefined) ? [] : sections);
    };

    const renderHeader = (section, _, isActive) => {
        //Accordion Header view
        return (
          <View style={{flexDirection: 'row',justifyContent:'space-between',paddingRight:40,paddingLeft:40,paddingTop:10}}>
              <Text style={{color: colors.text,fontFamily:fonts.fontFamily1bold,fontSize:fonts.H,textAlign:"center",padding:10}}>{section.title}</Text>
              {isActive?
              <Icon  style={{alignSelf:'center'}} name="angle-up" size={30} color={colors.text} />:
              <Icon style={{alignSelf:'center'}} name="angle-down" size={30} color={colors.text} />
              }
          </View>
          
        );
      };
      
      const renderContent = (section, _, isActive) => {
        //Accordion Content view
        return (
          <View>
            <Text  style={{color: colors.text ,fontSize:fonts.H2,fontFamily:fonts.fontFamily1,textAlign:"center"}}>
              {section.content}
            </Text>
          
          </View>
        );
      };
    return (
     
        <PageContainer styles={{ backgroundColor: colors.background, position: "relative",alignItems:"center" }}>
            <PageHeader navigation={navigation}/>
            <View style={{width:'90%',margin:2}}>
                    <Image
                      source={require("../assets/monument/eikona04.jpg")}
                      style={{ width: 'auto',borderRadius:12,borderWidth:1, height: 230}}
                    />
                </View>
            <ScrollView> 
              <View style={{height: "80%",width:"100%",paddingBottom:'20%', backgroundColor: colors.background}}>

                <View style={{flex:1,padding:10}}>
                  <Text style={{color:colors.text,fontSize:fonts.H,fontFamily:fonts.fontFamily1,textAlign:'center',padding:10}}>{state.language.dictionary.welcome}</Text>
                  <Text style={{color:colors.text,fontSize:fonts.H1,fontFamily:fonts.fontFamily1,textAlign:'center'}}>{state.language.dictionary.info}</Text>    
                </View>             
                <View style={{flex:1,paddingTop:10}}>
                    <Accordion 
                        align="center"
                        activeSections={activeSections}
                        sections={SECTIONS}
                        touchableComponent={TouchableOpacity}
                        expandMultiple={true}
                        renderHeader={renderHeader}
                        renderContent={renderContent}
                        duration={500}
                        onChange={setSections}
                    />   

                </View>
              </View>
            </ScrollView>
            <Header navigation={navigation} />
            
        </PageContainer>
        
     );
}

export default Homepage;