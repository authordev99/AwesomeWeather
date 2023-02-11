import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import SpaceFiller from "./SpaceFiller";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BottomWeatherDetails = ({ data }) => {
  const insets = useSafeAreaInsets();

  const getValue = (type) => {
    return data.find((item) => {
      return item.type === type
    }).value;
  }

  const items = [
    {
      icon: require("../images/umbrella.png"),
      value: `${getValue("warm")} %`,
    },
    {
      icon: require("../images/drop.png"),
      value: `${getValue("humidity")} %`,
    },
    {
      icon: require("../images/wind.png"),
      value: `${getValue("wind")} mph`,
    },
  ];

  return (
    <View style={[styles.bottomContainer, { marginBottom: insets.bottom }]}>
      {items.map((item, index) => {
        return (
          <View key={index} style={styles.container}>
            <Image style={styles.bottomImage} source={item.icon} />
            <SpaceFiller height={14} />
            <Text style={styles.statusText}>{item.value}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  bottomContainer: {
    flexDirection: "row",
  },
  bottomImage: {
    width: 24,
    height: 24,
  },
  statusText: { fontSize: 16 },
});


export default BottomWeatherDetails;
