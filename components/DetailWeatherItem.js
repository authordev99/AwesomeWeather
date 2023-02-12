import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import SpaceFiller from "./SpaceFiller";
import WeatherDaysList from "./WeatherDaysList";
import SwipeIndicator from "./SwipeIndicator";
import TodayWeather from "./TodayWeather";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");
const backgroundHeight = 250;
const DetailWeatherItem = ({ item, onPress }) => {
  const navigation = useNavigation();
  const scrollViewRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const onPressItem = () => {
    onPress(item);
  };

  const CityTop = () => {
    return (
      <>
        <Image key={item.name} style={styles.backgroundImage} source={{uri: item.background}} />
        <View style={styles.cityContainer}>
          <Image style={styles.roundImage} source={{uri: item.flag}} />
        </View>
        <SpaceFiller height={backgroundHeight / 4} />
        <View style={styles.bottomBackgroundContainer}>
          <Text style={styles.cityText}>{item.name}</Text>
          <SpaceFiller height={16} />
          <SwipeIndicator totalItems={2} currentIndex={currentIndex} />
        </View>
      </>

    );
  };

  const handleOnScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container} onPress={onPressItem}>
      <CityTop />
      <View style={styles.weatherInformationContainer}>
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
          <TodayWeather data={item}/>
          <WeatherDaysList data={item?.daily} navigation={navigation} />
        </ScrollView>

      </View>

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
  backgroundImage: {
    backgroundColor: "black",
    height: backgroundHeight,
    width: "100%"
  },
  bottomBackgroundContainer:{
    justifyContent: "center",
    alignItems: "center"
  },
  weatherInformationContainer: {
    flex: 1
  }
});


export default DetailWeatherItem;
