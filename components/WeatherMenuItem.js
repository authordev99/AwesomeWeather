import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SpaceFiller from "./SpaceFiller";

const WeatherMenuItem = ({ item, onPress }) => {

  const onPressItem = () => {
    onPress(item);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPressItem}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.temperature}>{item.temperature}</Text>
        <View style={styles.roundShape} />
      </View>

      <SpaceFiller width={12} />
      <View style={{flex: 1}}>
        <Text style={styles.cityText}>{item.name}</Text>
        <Text style={styles.statusText}>{item.status}</Text>
      </View>

      <View style={styles.iconContainer}>
        <Image style={styles.image} source={require("../images/back.png")} />
      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    alignItems: "center",
  },
  roundShape: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  temperature: { fontSize: 56 },
  cityText: { fontSize: 16, fontWeight: "bold" },
  statusText: { fontSize: 16 },
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
});


export default WeatherMenuItem;
