import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
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
