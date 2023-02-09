import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SpaceFiller from "./SpaceFiller";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomText = ({ text, additionalStyle, isWhiteColor }) => {
  const color = isWhiteColor ? 'white' : 'black';
  return (
    <Text style={[styles.text, additionalStyle, {color: color}]}>{text}</Text>
  );
};

const styles = StyleSheet.create({
  text: { textAlign: "center", fontWeight: "bold" }
});


export default CustomText;
