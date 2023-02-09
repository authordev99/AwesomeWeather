import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SpaceFiller from "./SpaceFiller";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TemperatureNumber from "./TemperatureNumber";

const { width } = Dimensions.get('window');
const TodayWeather = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../images/cloudy.png")} />
      <SpaceFiller height={24} />
      <TemperatureNumber temperature={35} type={"S"} />
      <Text style={styles.statusText}>{'cloudy'}</Text>
      <View style={styles.highLowContainer}>
        <Text style={styles.cityText}>15</Text>
        <Text style={styles.statusText}>36</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center", width: width },
  image: {
    width: 48,
    height: 48,
  },
  highLowContainer: { flexDirection: "row" },
  cityText: { fontSize: 24, fontWeight: "bold" },
  statusText: { fontSize: 16 },
});


export default TodayWeather;
