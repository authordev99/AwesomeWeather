import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SpaceFiller from "./SpaceFiller";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomImageButton = ({ image, onPress, isWhiteColor }) => {
  const tintColor = isWhiteColor ? 'white' : 'black';
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={image} style={[styles.image, {tintColor: tintColor}]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: { width: 24, height: 24 },
});


export default CustomImageButton;
