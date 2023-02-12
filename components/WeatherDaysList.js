/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text, View,
} from "react-native";
import { EMPTY_LIST_STATE } from "../util/strings";
import WeatherDaysItem from "./WeatherDaysItem";


const { width } = Dimensions.get("window");

function WeatherDaysList({ data }) {

  const renderItem = ({ item, index }) => (
    <WeatherDaysItem item={item} index={index} />
  );

  function keyExtractor(item, index) {
    return `${item.user}-${index}`;
  }

  const EmptyList = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text>{EMPTY_LIST_STATE}</Text>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.contentContainerStyle}
      ListEmptyComponent={<EmptyList />} />
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  contentContainerStyle: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});

export default WeatherDaysList;
