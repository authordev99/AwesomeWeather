import { Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import SpaceFiller from "./SpaceFiller";
import WeatherDaysList from "./WeatherDaysList";
import SwipeIndicator from "./SwipeIndicator";
import TodayWeather from "./TodayWeather";
import BottomWeatherDetails from "./BottomWeatherDetails";

const { height, width } = Dimensions.get("window");
const backgroundHeight = 250;
const DetailWeatherItem = ({ item, onPress }) => {
  const scrollViewRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const bottomInformation = [
    {
      icon: require("../images/umbrella.png"),
      value: "40%",
    },
    {
      icon: require("../images/drop.png"),
      value: "50%",
    },
    {
      icon: require("../images/wind.png"),
      value: "4 mph",
    },
  ];

  const onPressItem = () => {
    onPress(item);
  };

  const CityTop = () => {
    return (
      <>
        <View style={{ backgroundColor: "black", height: backgroundHeight, width: "100%" }} />
        <View style={styles.cityContainer}>
          <View style={styles.roundImage} />
        </View>
        <SpaceFiller height={backgroundHeight / 4} />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.cityText}>{item.name}</Text>
          <SpaceFiller height={16} />
          <SwipeIndicator totalItems={2} currentIndex={currentIndex} />
        </View>
      </>

    );
  };

  const handleOnScroll = (event) => {
    const index = parseInt(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container} onPress={onPressItem}>
      <CityTop />
      <View style={{ flex: 1 }}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          onScroll={handleOnScroll}
          scrollEventThrottle={16}
          snapToInterval={width}
          snapToAlignment={"center"}
          decelerationRate={0}
        >
          <TodayWeather />
          <WeatherDaysList />
        </ScrollView>

      </View>
      <BottomWeatherDetails item={bottomInformation} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: "#FFFFFF",
  },
  temperature: { top: -20, fontSize: 84, fontWeight: "200" },
  temperatureType: { top: -6, fontSize: 24, fontWeight: "200" },
  cityText: { fontSize: 24, fontWeight: "bold" },
  statusText: { fontSize: 16 },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: "white",
    borderRadius: 50 / 2,
    shadowColor: "BLACK",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8.65,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flexDirection: "row",
  },
  image: {
    width: 48,
    height: 48,
  },
  bottomImage: {
    width: 24,
    height: 24,
  },
  roundImage: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  cityContainer: {
    left: 0,
    right: 0,
    position: "absolute",
    top: backgroundHeight * 0.75,
    justifyContent: "center",
    alignItems: "center",
  },
});


export default DetailWeatherItem;
