import styled from 'styled-components';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';


export const Colors = {
    primary: '#ffffff',
    black: '#000000',
    butt0n: '#232323',
    secondary: '#E5E7EB',
    tertiary: '#1F2937',
    darkLight: '#9CA3AF',
    brand: '#6D28D9',
    green: '#10B981',
    red: '#EF4444',
  };

export const darkTheme = {
    dark: true,
    colors: {
      primary: '#363636',
      header: '#18191A',
      background: '#1b1b1b',
      button: '#131313',
      details: '#403f3f',
      details_modal: "#403f3f",
      fontButton: '#f2f2f2',
      font: '#f5f5f5',
      textMuted: '#c4c4c4',
      backgroundDarker:'#0f0f0f',
      later: '#363636',

      card: 'rgb(255, 255, 255)',
      text: '#f4f4f4',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
      test: "#6D28D9",
      cancel: 'rgba(255, 0, 0, 0.35)',
      finish: '#15753B',
      link: '#2986cc',
    },
  };

export const lightTheme = {
    dark: false,
    colors: {
      primary: '#e5e5e5',
      background: '#f4f4f4',
      backgroundDarker:'#EBEBEC',
      details: "#5c5c5c",
      details_modal: "#949494",
      button: '#131313',
      fontButton: '#f2f2f2',
      font: '#18191A',
      textMuted: '#7c7c7c',
      cancel: '#f44336',
      finish: '#099C3A',
      link: '#2986cc',
    },
  }

  export const fonts = {
    H: 22,
    H1: 18,
    H2: 16,
    H3: 14,
    text: 12,
    button: 20
  }

export const InnerContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
`;

export const ContentContainer = styled.View`
  width: 100%;
  height: 10%;
  paddingTop: 26px;
  flex: 1;
  backgroundColor: ${Colors.brand};
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  display: flex;
  background-color: ${Colors.butt0n};
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 12px;
  margin-vertical: 5px;
  marginTop: 28px;
  width: 90%;
  height: 60px;
  ${(props) =>
    props.google == true &&
    `
    background-color: ${Colors.green};
    flex-direction: row;
    justify-content: center;
  `}
`;

export const ButtonText = styled.Text`
  color: ${Colors.primary};
  font-size: 16px;
  
`;