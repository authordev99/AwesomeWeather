import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import SpaceFiller from "./SpaceFiller";
import TemperatureNumber from "./TemperatureNumber";
import { getImageWeatherStatus } from "../util/utility";
import BottomWeatherDetails from "./BottomWeatherDetails";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");
const TodayWeather = ({ data }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingBottom: insets.bottom}]}>
      <SpaceFiller height={250 / 4} />
      <Image style={styles.image} source={getImageWeatherStatus(data.status)} />
      <SpaceFiller height={24} />
      <TemperatureNumber
        temperature={data.temperature}
        temperatureStyle={styles.temperaturePosition}
        isShowTemperatureType={true}
        temperatureType={"S"} />
      <Text style={styles.statusText}>{data.status}</Text>
      <SpaceFiller height={24} />
      <View style={styles.highLowContainer}>
        <TemperatureNumber
          temperature={data.high}
          temperatureStyle={[styles.text, styles.bold]}
          roundShapeSize={"small"} />
        <TemperatureNumber
          temperature={data.low}
          temperatureStyle={styles.text}
          roundShapeSize={"small"} />
      </View>
      <SpaceFiller height={48} />
      <BottomWeatherDetails data={data?.details} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: width,
  },
  image: {
    width: height / 32,
    height: height / 32,
  },
  highLowContainer: {
    flexDirection: "row",
  },
  text: {
    fontSize: 24,
  },
  bold: {
    fontWeight: "bold",
  },
  statusText: {
    fontSize: 16,
  },
  temperaturePosition: {
    fontSize: height / 12,
    top: -20,
  },
});


export default TodayWeather;
