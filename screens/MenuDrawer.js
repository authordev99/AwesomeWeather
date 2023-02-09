/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useContext, useEffect, useState } from "react";
import {
  Alert, FlatList,
  SafeAreaView,
  StyleSheet,
  Text, View,
} from "react-native";
import Header from "../components/Header";
import CustomImageButton from "../components/CustomImageButton";
import CustomText from "../components/CustomTitle";
import { FLASHWHITE } from "../util/colors";
import { EMPTY_LIST_STATE } from "../util/strings";
import WeatherMenuItem from "../components/WeatherMenuItem";



function MenuDrawer(props) {

  const data = [
    {
      temperature: "37",
      status: "cloudy",
      name: "Budapest",
    },
    {
      temperature: "24",
      status: "Partial cloudy",
      name: "Malaysia",
    },
    {
      temperature: "22",
      status: "Fog",
      name: "Tokyo",
    },
    {
      temperature: "31",
      status: "Snow",
      name: "New York",
    }
  ]

  const onPress = (item) => {
    props.navigation.navigate("Home",{value: item});
  };

  const goBack = () => {
    props.navigation.toggleDrawer();
  }

  const renderItem = ({ item, index }) => (
    <WeatherMenuItem item={item} index={index} onPress={onPress}/>
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
    <View style={styles.container}>
      <Header
        headerCenterElement={
          <CustomText
            text={"Weather"}
          />
        }
        headerRightElement={
          <CustomImageButton
            image={require("../images/search.png")}
            onPress={goBack} />
        }
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={<EmptyList />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: FLASHWHITE,
  },
  contentContainerStyle: {
    flex: 1,
  },
  emptyContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

});

export default MenuDrawer;
