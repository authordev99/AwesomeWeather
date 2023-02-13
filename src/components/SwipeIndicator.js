import { StyleSheet, View } from "react-native";
import React from "react";

const SwipeIndicator = ({ totalItems, currentIndex, }) => {
  const pages = Array(totalItems).fill(null).map((_, i) => i);
  return (
    <View style={styles.container}>
      {pages.map((index) => {
        if (currentIndex === index)
        {
          return <View key={index} style={styles.activeIndicator}/>
        }else
        {
          return <View key={index} style={styles.inactiveIndicator}/>
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  activeIndicator: {
    width: 20,
    height: 6,
    backgroundColor: 'black',
    borderRadius: 10/2,
    margin: 2
  },
  inactiveIndicator: {
    width: 10,
    height: 6,
    backgroundColor: 'black',
    opacity: 0.3,
    borderRadius: 10/2,
    margin: 2
  },
});


export default SwipeIndicator;
