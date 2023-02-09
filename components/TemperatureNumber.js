import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SpaceFiller from "./SpaceFiller";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TemperatureNumber = ({ temperature, temperatureStyle, roundShapeSize, type, typeStyle }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.temperature, temperatureStyle]}>{temperature}</Text>
      <View style={styles.roundShape} />
      <SpaceFiller width={4} />
      <Text style={styles.temperatureType}>{type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: 'flex-start' },
  roundShape: {
    height: 8,
    width: 8,
    borderRadius: 8 / 2,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  temperatureType: { top: -6, fontSize: 24, fontWeight: "200" },
  temperature: { top: -20, fontSize: 84, fontWeight: "200" },
});


export default TemperatureNumber;
