import React from 'react';
import { Text, StyleSheet } from "react-native"
import useMain from '../context/Main';

function H1({children, styles}) {
  const state = useMain()

const local_styles = {
  color: '#000000',
  width: "auto",
  fontSize: 20,
  fontWeight: "900",
  paddingRight: 6,
  paddingBottom: 6,
}

  return (
    <Text style={{...local_styles, ...styles}}>
      {children}
    </Text>
  );
}


export default H1;