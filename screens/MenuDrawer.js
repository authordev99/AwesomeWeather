/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import {
  FlatList,
  StyleSheet,
  Text, View,
} from "react-native";
import Header from "../components/Header";
import CustomImageButton from "../components/CustomImageButton";
import CustomText from "../components/CustomTitle";
import { FLASHWHITE } from "../util/colors";
import { EMPTY_LIST_STATE } from "../util/strings";
import WeatherMenuItem from "../components/WeatherMenuItem";
import { data } from "../util/data";



function MenuDrawer(props) {

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
