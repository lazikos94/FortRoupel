import React, { useContext, useState, useEffect, useCallback } from "react";
import { View, Text, Linking, TouchableOpacity,ScrollView,Image,Modal,Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";
import useMain from "../context/Main";
import {Dimensions, StatusBar} from 'react-native';
import PageContainer from '../elements/PageContainer';
import PageHeader from "../elements/PageHeader";
import H1 from "../elements/H1";
import { ContentContainer, StyledButton, ButtonText, fonts } from '../context/Styles'
import Accordion from 'react-native-collapsible/Accordion';
import Header from "../elements/Header";

import ImageZoom from 'react-native-image-pan-zoom';
export default function Tunnel({navigation}) {
    const state = useMain();
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);
    const [modalVisible5, setModalVisible5] = useState(false);
    const [modalVisible6, setModalVisible6] = useState(false);
    const [modalVisible7, setModalVisible7] = useState(false);
    const [modalVisible8, setModalVisible8] = useState(false);
    const {colors} = useTheme();
  return (
    <PageContainer styles={{ backgroundColor: colors.background, position: "relative",alignItems:"center"  }}>
        <PageHeader styles={{ backgroundColor: colors.background }} navigation={navigation} title={state.language.dictionary.tunnel}/>
          <ScrollView>
            <View style={{height: "100%", backgroundColor: colors.background,flex:1,padding:12,alignItems:'center'}}>
              <Text style={{color:colors.text,fontSize:fonts.H2,textAlign:'center',paddingBottom:5,fontFamily:fonts.fontFamily1}}>{state.language.dictionary.entrance}</Text>
              <View style={{width:'100%',paddingBottom:50}}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible1}
                    onRequestClose={() => {
                      setModalVisible1(!modalVisible1);
                    }}
                  >
                    <View style={{
                       flex: 1,
                       justifyContent: "center",
                       alignItems: "center",

                    }}>
                      <View style={{margin: 20,
                        backgroundColor:'rgba(0, 0, 0, 0.9)',
                        padding: 35,
                        alignItems: "center",
                        justifyContent:'center',
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2
                        },
                        width:'100%',
                        height:'100%',
                        shadowOpacity: 0.5,
                        shadowRadius: 4,
                        elevation: 5}}>
                    <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={400}
                       imageHeight={300}
                    >
                        <Image source={require('../assets/tunnel/entrance.jpg')} 
                    style={{width: 'auto',height:300}}/> 
                    </ImageZoom>
                    </View>
                    </View>
                </Modal>
                <Pressable onPress={()=>setModalVisible1(true)}>
                <Image source={require('../assets/tunnel/entrance.jpg')} 
                    style={{width: 'auto', borderRadius:12,borderWidth:1,margin:2,height:230}}/>
                </Pressable>       
                <Text style={{color:colors.text,fontSize:fonts.H2,textAlign:'center',paddingBottom:5,paddingTop:5,fontFamily:fonts.fontFamily1}}>{state.language.dictionary.entrancetoday}</Text>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible2}
                    onRequestClose={() => {
                      setModalVisible2(!modalVisible2);
                    }}
                  >
                    <View style={{
                       flex: 1,
                       justifyContent: "center",
                       alignItems: "center",

                    }}>
                      <View style={{margin: 20,
                        backgroundColor:'rgba(0, 0, 0, 0.9)',
                        padding: 35,
                        alignItems: "center",
                        justifyContent:'center',
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2
                        },
                        width:'100%',
                        height:'100%',
                        shadowOpacity: 0.5,
                        shadowRadius: 4,
                        elevation: 5}}>
                    <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={400}
                       imageHeight={230}
                    >
                        <Image source={require('../assets/tunnel/stoaeisodos.jpg')} 
                    style={{width: 'auto',height:230}}/> 
                    </ImageZoom>
                    </View>
                    </View>
                </Modal>
                <Pressable onPress={()=>setModalVisible2(true)}>
                <Image source={require('../assets/tunnel/stoaeisodos.jpg')}
                    style={{width: 'auto',borderRadius:12,borderWidth:1,margin:2,height:230}}/>    
                </Pressable>
                <Text style={{color:colors.text,fontSize:fonts.H2,textAlign:'center',paddingBottom:5,paddingTop:5,fontFamily:fonts.fontFamily1}}>{state.language.dictionary.tunnelstart}</Text>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible3}
                    onRequestClose={() => {
                      setModalVisible3(!modalVisible3);
                    }}
                  >
                    <View style={{
                       flex: 1,
                       justifyContent: "center",
                       alignItems: "center",

                    }}>
                      <View style={{margin: 20,
                        backgroundColor:'rgba(0, 0, 0, 0.9)',
                        padding: 35,
                        alignItems: "center",
                        justifyContent:'center',
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2
                        },
                        width:'100%',
                        height:'100%',
                        shadowOpacity: 0.5,
                        shadowRadius: 4,
                        elevation: 5}}>
                    <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={400}
                       imageHeight={300}
                    >
                        <Image source={require('../assets/tunnel/tunnel.jpg')} 
                    style={{width: 'auto',height:300}}/> 
                    </ImageZoom>
                    </View>
                    </View>
                </Modal>
                <Pressable onPress={()=>setModalVisible3(true)}>
                <Image source={require('../assets/tunnel/tunnel.jpg')}
                    style={{width: 'auto',borderRadius:12,borderWidth:1,margin:2,height:230}}/>  
                </Pressable>
                <Text style={{color:colors.text,fontSize:fonts.H2,textAlign:'center',paddingBottom:5,paddingTop:5,fontFamily:fonts.fontFamily1}}>{state.language.dictionary.tunnelinforooms}</Text>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible4}
                    onRequestClose={() => {
                      setModalVisible4(!modalVisible4);
                    }}
                  >
                    <View style={{
                       flex: 1,
                       justifyContent: "center",
                       alignItems: "center",

                    }}>
                      <View style={{margin: 20,
                        backgroundColor:'rgba(0, 0, 0, 0.9)',
                        padding: 35,
                        alignItems: "center",
                        justifyContent:'center',
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2
                        },
                        width:'100%',
                        height:'100%',
                        shadowOpacity: 0.5,
                        shadowRadius: 4,
                        elevation: 5}}>
                    <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={400}
                       imageHeight={300}
                    >
                        <Image source={require('../assets/tunnel/chambers.jpg')} 
                    style={{width: 'auto',height:300}}/> 
                    </ImageZoom>
                    </View>
                    </View>
                </Modal>
                <Pressable onPress={()=>setModalVisible4(true)}>       
                <Image source={require('../assets/tunnel/chambers.jpg')}
                    style={{width: 'auto',borderRadius:12,borderWidth:1,margin:2,marginBottom:10,marginTop:10,height:280}}/>   
                </Pressable> 
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible5}
                    onRequestClose={() => {
                      setModalVisible5(!modalVisible5);
                    }}
                  >
                    <View style={{
                       flex: 1,
                       justifyContent: "center",
                       alignItems: "center",

                    }}>
                      <View style={{margin: 20,
                        backgroundColor:'rgba(0, 0, 0, 0.9)',
                        padding: 35,
                        alignItems: "center",
                        justifyContent:'center',
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2
                        },
                        width:'100%',
                        height:'100%',
                        shadowOpacity: 0.5,
                        shadowRadius: 4,
                        elevation: 5}}>
                    <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={400}
                       imageHeight={300}
                    >
                        <Image source={require('../assets/tunnel/telephonecenter.jpg')} 
                    style={{width: 'auto',height:300}}/> 
                    </ImageZoom>
                    </View>
                    </View>
                </Modal>
                <Pressable onPress={()=>setModalVisible5(true)}>       
                    <Image source={require('../assets/tunnel/telephonecenter.jpg')}
                    style={{width: 'auto',borderRadius:12,borderWidth:1,margin:2,marginBottom:10,marginTop:10,height:280}}/>   
                </Pressable>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible6}
                    onRequestClose={() => {
                      setModalVisible6(!modalVisible6);
                    }}
                  >
                    <View style={{
                       flex: 1,
                       justifyContent: "center",
                       alignItems: "center",

                    }}>
                      <View style={{margin: 20,
                        backgroundColor:'rgba(0, 0, 0, 0.9)',
                        padding: 35,
                        alignItems: "center",
                        justifyContent:'center',
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2
                        },
                        width:'100%',
                        height:'100%',
                        shadowOpacity: 0.5,
                        shadowRadius: 4,
                        elevation: 5}}>
                    <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={400}
                       imageHeight={300}
                    >
                        <Image source={require('../assets/tunnel/office.jpg')} 
                    style={{width: 'auto',height:300}}/> 
                    </ImageZoom>
                    </View>
                    </View>
                </Modal>
               <Pressable onPress={()=>setModalVisible6(true)}>
                <Image source={require('../assets/tunnel/office.jpg')}
                    style={{width: 'auto',borderRadius:12,borderWidth:1,margin:2,marginBottom:10,marginTop:10,height:280}}/>    
                </Pressable>
                <Text style={{color:colors.text,fontSize:fonts.H2,textAlign:'center',paddingBottom:5,paddingTop:5,fontFamily:fonts.fontFamily1}}>{state.language.dictionary.tunnelprotection}</Text>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible7}
                    onRequestClose={() => {
                      setModalVisible7(!modalVisible7);
                    }}
                  >
                    <View style={{
                       flex: 1,
                       justifyContent: "center",
                       alignItems: "center",

                    }}>
                      <View style={{margin: 20,
                        backgroundColor:'rgba(0, 0, 0, 0.9)',
                        padding: 35,
                        alignItems: "center",
                        justifyContent:'center',
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2
                        },
                        width:'100%',
                        height:'100%',
                        shadowOpacity: 0.5,
                        shadowRadius: 4,
                        elevation: 5}}>
                    <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={400}
                       imageHeight={600}
                    >
                        <Image source={require('../assets/tunnel/security.jpg')} 
                    style={{width: 'auto',height:600}}/> 
                    </ImageZoom>
                    </View>
                    </View>
                </Modal>
                <Pressable onPress={()=>setModalVisible7(true)}>
                <Image source={require('../assets/tunnel/security.jpg')}
                    style={{width: 'auto',borderRadius:12,borderWidth:1,margin:2,height:500}}/>
                    </Pressable>
                <Text style={{color:colors.text,fontSize:fonts.H2,textAlign:'center',paddingBottom:5,paddingTop:5,fontFamily:fonts.fontFamily1}}>{state.language.dictionary.tunnelspecs}</Text>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible8}
                    onRequestClose={() => {
                      setModalVisible8(!modalVisible8);
                    }}
                  >
                    <View style={{
                       flex: 1,
                       justifyContent: "center",
                       alignItems: "center",

                    }}>
                      <View style={{margin: 20,
                        backgroundColor:'rgba(0, 0, 0, 0.9)',
                        padding: 35,
                        alignItems: "center",
                        justifyContent:'center',
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2
                        },
                        width:'100%',
                        height:'100%',
                        shadowOpacity: 0.5,
                        shadowRadius: 4,
                        elevation: 5}}>
                    <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={400}
                       imageHeight={350}
                    >
                        <Image source={require('../assets/tunnel/command.jpg')} 
                    style={{width: 'auto',height:350}}/> 
                    </ImageZoom>
                    </View>
                    </View>
                </Modal>
                <Pressable onPress={()=>setModalVisible8(true)}>
                <Image source={require('../assets/tunnel/command.jpg')}
                    style={{width: 'auto',borderRadius:12,borderWidth:1,margin:2,height:300}}/>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        <Header navigation={navigation}/>
    </PageContainer>
  )
}
