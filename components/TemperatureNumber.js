import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SpaceFiller from "./SpaceFiller";

const TemperatureNumber = ({ temperature, temperatureStyle, roundShapeSize, isShowTemperatureType = false, temperatureType, temperatureTypeStyle }) => {
  const getRoundShapeSize = () => {
    let size;
    switch (roundShapeSize) {
      case "small":
        size = 6;
        break
      case "big":
      default:
        size = 8;
    }
    return {
      height: size,
      width: size,
      borderRadius: size / 2,
    }
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.temperature, temperatureStyle]}>{temperature}</Text>
      <View style={[styles.roundShape, getRoundShapeSize()]} />
      <SpaceFiller width={4} />
      {isShowTemperatureType && <Text style={[styles.temperatureType, temperatureTypeStyle]}>{temperatureType}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'flex-start'
  },
  roundShape: {
    height: 8,
    width: 8,
    borderRadius: 8 / 2,
    borderWidth: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  temperatureType: { top: -6, fontSize: 24, fontWeight: "200" },
  temperature: { fontSize: 84, fontWeight: "200" },
});


export default TemperatureNumber;
