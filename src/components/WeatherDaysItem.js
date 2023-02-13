import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import SpaceFiller from "./SpaceFiller";
import { getImageWeatherStatus } from "../util/utility";
import TemperatureNumber from "./TemperatureNumber";

const WeatherDaysItem = ({ item }) => {

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={getImageWeatherStatus(item.status)} />
      <SpaceFiller width={32} />
      <View style={styles.dateContainer}>
        <Text style={[styles.text, styles.bold]}>{item.day}</Text>
        <Text style={styles.text}>{item.date}</Text>
      </View>

      <View style={styles.highLowContainer}>
        <TemperatureNumber
          temperature={item.high}
          temperatureStyle={[styles.text, styles.bold]}
          roundShapeSize={'small'}/>
        <TemperatureNumber
          temperature={item.low}
          temperatureStyle={styles.text}
          roundShapeSize={'small'}/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    alignItems: "center",
  },
  dateContainer: {
    flex: 1
  },
  roundShape: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 50 / 2,
    shadowColor: 'BLACK',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8.65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24
  },
  highLowContainer: {
    alignItems: 'flex-end'
  },
  text: { fontSize: 16 },
  bold: {fontWeight: "bold" },
});


export default WeatherDaysItem;
