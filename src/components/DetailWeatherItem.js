import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
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

  const handleOnScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container} onPress={onPressItem}>
      <SpaceFiller height={backgroundHeight / 4} />
      <View style={styles.bottomBackgroundContainer}>
        <Text style={styles.cityText}>{item.name}</Text>
        <SpaceFiller height={16} />
        <SwipeIndicator totalItems={2} currentIndex={currentIndex} />
      </View>
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
  cityText: { fontSize: 24, fontWeight: "bold" },
  bottomBackgroundContainer:{
    justifyContent: "center",
    alignItems: "center"
  },
  weatherInformationContainer: {
    flex: 1
  }
});


export default DetailWeatherItem;
