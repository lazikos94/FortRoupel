import React from 'react';
import { TouchableOpacity } from "react-native"

function Btn({ children, onPress, styles }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles}>
      {children}
    </TouchableOpacity>
  );
}

export default Btn;