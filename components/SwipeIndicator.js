import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SpaceFiller from "./SpaceFiller";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SwipeIndicator = ({ totalItems, currentIndex, }) => {
  const pages = Array(totalItems).fill(null).map((_, i) => i);
  return (
    <View style={{flexDirection: 'row'}}>
      {pages.map((index) => {
        if (currentIndex === index)
        {
          return <View style={styles.activeIndicator}/>
        }else
        {
          return <View style={styles.inactiveIndicator}/>
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  text: { textAlign: "center", fontWeight: "bold" },
  activeIndicator: {width: 20, height: 6,backgroundColor: 'black', borderRadius: 10/2, margin: 2},
  inactiveIndicator: {width: 10, height: 6,backgroundColor: 'black', opacity: 0.3, borderRadius: 10/2, margin: 2},
});


export default SwipeIndicator;
