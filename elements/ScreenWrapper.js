import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from "@react-navigation/native";

function ScreenWrapper({children, styles}) {
    const { colors } = useTheme();

    const local_styles = StyleSheet.create({
        main: {
          backgroundColor: colors.header,
          width: "100%",
          height: '100%',
          color: "white",
        }
      })

    return (
        <SafeAreaView style={{...local_styles.main, ...styles}}>
            <View>
                {children}
            </View>
        </SafeAreaView>
    );
}

export default ScreenWrapper;

