import React, { useEffect, useRef } from "react";
import { FlatList } from "react-native";
import { View, StyleSheet, Dimensions } from "react-native";
import DetailWeatherItem from "../components/DetailWeatherItem";
import Header from "../components/Header";
import CustomText from "../components/CustomTitle";
import CustomImageButton from "../components/CustomImageButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useData from "../hooks/useData";
import FullScreenLoading from "../components/FullScreenLoading";

const { height } = Dimensions.get("window");


const Home = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  const flatListRef = useRef();
  const selectedIndex = route?.params?.index ?? 0;
  const { data } = useData();

  console.log("data = ", data);

  useEffect(() => {
    data && flatListRef.current.scrollToIndex({ index: selectedIndex, animated: true });
  }, [selectedIndex]);
  const renderItem = ({ item, index }) => (
    <DetailWeatherItem item={item} index={index} />
  );

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  return (

    <View style={styles.container}>
      {data ? (
        <>
          <Header
            style={[styles.headerAbsolute, { top: insets.top }]}
            headerLeftElement={
              <CustomImageButton
                image={require("../images/menu.png")}
                isWhiteColor={true}
                onPress={openDrawer} />
            }
            headerCenterElement={
              <CustomText
                text={"Weather"}
                isWhiteColor={true}
              />
            }
            headerRightElement={
              <CustomImageButton
                image={require("../images/search.png")}
                isWhiteColor={true}
                onPress={() => {
                }} />
            }

          />
          <FlatList
            ref={flatListRef}
            pagingEnabled={true}
            horizontal={false}
            decelerationRate={0}
            snapToInterval={height}
            snapToAlignment={"start"}
            data={data}
            renderItem={renderItem} />
        </>
      ) : (
        <FullScreenLoading />
      )}
    </View>

  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerAbsolute: {
    zIndex: 1,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
