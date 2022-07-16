import React, { useContext, useState, useEffect, useCallback } from "react";
import { View, Text, Linking, TouchableOpacity,Image,ScrollView,Pressable,Modal } from "react-native";
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
function Museum({navigation}) {
    const state = useMain();
    const {colors} = useTheme();
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);
    const [modalVisible5, setModalVisible5] = useState(false);
    const [modalVisible6, setModalVisible6] = useState(false);
    const [modalVisible7, setModalVisible7] = useState(false);
    const [modalVisible8, setModalVisible8] = useState(false);
    return ( 
        <PageContainer styles={{ backgroundColor: colors.background, position: "relative" }}>
        <PageHeader styles={{ backgroundColor: colors.background }} navigation={navigation} title={state.language.dictionary.museum}/>
        {/* <H1 styles={{ fontSize: fonts.H ,padding: 8, alignSelf: 'center', color: colors.textMuted }}>{state.language.dictionary.museum}</H1> */}
          <ScrollView>
            <View style={{height: "100%", backgroundColor: colors.background,flex:1,padding:10,alignItems:'center'}}>
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
                        <Image source={require('../assets/museum/eikona11.jpg')} 
                    style={{width: 'auto',height:300}}/> 
                    </ImageZoom>
                    </View>
                    </View>
                </Modal>
                {/* <Text style={{color:colors.text,fontSize:fonts.H2,textAlign:'center',paddingBottom:5,paddingTop:5,fontFamily:fonts.fontFamily1}}>{state.language.dictionary.museumekso}</Text> */}
                <Pressable onPress={()=>setModalVisible1(true)}>
                  <Image source={require('../assets/museum/eikona11.jpg')}
                        style={{width: 'auto',borderRadius:12,marginBottom:10,marginTop:10,borderWidth:1,margin:2, height: 280}}
                    />
                </Pressable>
                <Text style={{color:colors.text,fontSize:fonts.H2,paddingBottom:5,paddingTop:5,fontFamily:fonts.fontFamily1,textAlign:'center'}}>{state.language.dictionary.museumtomi}</Text>
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
                       imageHeight={300}
                    >
                        <Image source={require('../assets/museum/tomi.jpg')} 
                    style={{width: 'auto',height:300}}/> 
                    </ImageZoom>
                    </View>
                    </View>
                </Modal>
                <Pressable onPress={()=>setModalVisible8(true)}>
                <Image source={require('../assets/museum/tomi.jpg')}
                    style={{width: 'auto',borderRadius:12,marginBottom:10,marginTop:10,borderWidth:1,margin:2,height: 270}}
                /></Pressable>
                <Text style={{color:colors.text,fontSize:fonts.H2,paddingBottom:5,paddingTop:5,fontFamily:fonts.fontFamily1,textAlign:'center'}}>{state.language.dictionary.museumentrance}</Text>
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
                       imageHeight={300}
                    >
                        <Image source={require('../assets/museum/museum.jpg')} 
                    style={{width: 'auto',height:300}}/> 
                    </ImageZoom>
                    </View>
                    </View>
                </Modal>
                <Pressable onPress={()=>setModalVisible2(true)}>
                <Image source={require('../assets/museum/museum.jpg')}
                    style={{width: 'auto',borderRadius:12,marginBottom:10,marginTop:10,borderWidth:1,margin:2,height: 270}}
                /></Pressable>
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
                       imageHeight={300}
                    >
                        <Image source={require('../assets/museum/gunsss.jpg')} 
                    style={{width: 'auto',height:300}}/> 
                    </ImageZoom>
                    </View>
                    </View>
                </Modal>
                <Pressable onPress={()=>setModalVisible7(true)}>
                <Image source={require('../assets/museum/gunsss.jpg')}
                    style={{width: 'auto',borderRadius:12,marginBottom:10,marginTop:10,borderWidth:1,margin:2,height: 270}}
                /></Pressable>
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
                        <Image source={require('../assets/museum/entrance.jpg')} 
                    style={{width: 'auto',height:300}}/> 
                    </ImageZoom>
                    </View>
                    </View>
                </Modal>
                <Text style={{color:colors.text,fontSize:fonts.H2,paddingBottom:5,paddingTop:5,fontFamily:fonts.fontFamily1,textAlign:'center'}}>{state.language.dictionary.museumflag}</Text>
                 <Pressable onPress={()=>setModalVisible3(true)}>
                <Image source={require('../assets/museum/entrance.jpg')}
                    style={{width: 'auto',borderRadius:12,marginBottom:10,marginTop:10,borderWidth:1,margin:2,height: 250}}
                /></Pressable>
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
                        <Image source={require('../assets/museum/lego.jpg')} 
                    style={{width: 'auto',height:300}}/> 
                    </ImageZoom>
                    </View>
                    </View>
                </Modal>
                <Text style={{color:colors.text,fontSize:fonts.H2,textAlign:'center',paddingBottom:5,paddingTop:5,fontFamily:fonts.fontFamily1}}>{state.language.dictionary.playmobil}</Text>
                <Pressable onPress={()=>setModalVisible4(true)}>
                <Image source={require('../assets/museum/lego.jpg')}
                    style={{width: 'auto',borderRadius:12,marginBottom:10,marginTop:10,borderWidth:1,margin:2,height: 250}}
                /></Pressable>
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
                        <Image source={require('../assets/museum/doura.jpg')} 
                    style={{width: 'auto',height:300}}/> 
                    </ImageZoom>
                    </View>
                    </View>
                </Modal>
                <Pressable onPress={()=>setModalVisible5(true)}>
                <Image source={require('../assets/museum/doura.jpg')}
                    style={{width: 'auto',borderRadius:12,marginBottom:10,marginTop:10,borderWidth:1,margin:2,height: 300}}
                /></Pressable>
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
                        <Image source={require('../assets/museum/sword.jpg')} 
                    style={{width: 'auto',height:300}}/> 
                    </ImageZoom>
                    </View>
                    </View>
                </Modal>
                <Text style={{color:colors.text,fontSize:fonts.H2,textAlign:'center',paddingBottom:5,paddingTop:5,fontFamily:fonts.fontFamily1}}>{state.language.dictionary.sword}</Text>
                <Pressable onPress={()=>setModalVisible6(true)}>
                <Image source={require('../assets/museum/sword.jpg')}
                    style={{width: 'auto',borderRadius:12,marginBottom:10,marginTop:10,borderWidth:1,margin:2,height: 250}}
                /></Pressable>
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
                        <Image source={require('../assets/museum/sound.jpg')} 
                    style={{width: 'auto',height:300}}/> 
                    </ImageZoom>
                    </View>
                    </View>
                </Modal>
                <Text style={{color:colors.text,fontSize:fonts.H2,textAlign:'center',paddingBottom:5,paddingTop:5,fontFamily:fonts.fontFamily1}}>{state.language.dictionary.sound}</Text>
                <Pressable onPress={()=>setModalVisible7(true)}>
                <Image source={require('../assets/museum/sound.jpg')}
                    style={{width: 'auto',borderRadius:12,marginBottom:10,marginTop:10,borderWidth:1,margin:2,height: 250}}
                /></Pressable>
              </View>
            </View>
          </ScrollView>
        <Header navigation={navigation}/>
    </PageContainer>
     );
}

export default Museum;