import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import SpaceFiller from "./SpaceFiller";
import TemperatureNumber from "./TemperatureNumber";
import { getImageWeatherStatus } from "../util/utility";
import BottomWeatherDetails from "./BottomWeatherDetails";

const { width } = Dimensions.get("window");
const TodayWeather = ({ data }) => {
  return (
    <View style={styles.container}>
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
    justifyContent: "center",
    alignItems: "center",
    width: width,
  },
  image: {
    width: 48,
    height: 48,
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
    top: -20,
  },
});


export default TodayWeather;
