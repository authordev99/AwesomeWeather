import React, { useEffect, useRef, useState } from "react";
import { FlatList } from "react-native";
import { View, StyleSheet, Dimensions } from "react-native";
import DetailWeatherItem from "../components/DetailWeatherItem";
import Header from "../components/Header";
import CustomText from "../components/CustomTitle";
import CustomImageButton from "../components/CustomImageButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useData from "../hooks/useData";
import FullScreenLoading from "../components/FullScreenLoading";
import ScrollViewSnap from "../components/ScrollViewSnap";

const { height } = Dimensions.get("window");

const backgroundHeight = 250;
const flagHeight = 100;

const Home = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  const flatListRef = useRef();
  const selectedIndex = route?.params?.index ?? 0;
  const { data, getData } = useData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const backgroundImageList = data?.map(item => item.background );
  const flagImageList = data?.map(item => item.flag );

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    data && flatListRef.current.scrollToIndex({ index: selectedIndex, animated: true });
  }, [selectedIndex]);

  const renderItem = ({ item, index }) => (
    <DetailWeatherItem item={item} index={index} />
  );

  const openDrawer = () => {
    navigation.toggleDrawer();
  };
  const handleOnScroll2 = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.y / height);
    setCurrentIndex(index);
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

          <ScrollViewSnap
            data={backgroundImageList}
            style={{height: backgroundHeight}}
            imageStyle={styles.backgroundImage}
            height={backgroundHeight}
            currentIndex={currentIndex}
          />

          <FlatList
            ref={flatListRef}
            pagingEnabled={true}
            horizontal={false}
            decelerationRate={0}
            snapToInterval={height}
            snapToAlignment={"start"}
            onScroll={handleOnScroll2}
            data={data}
            renderItem={renderItem} />


          <ScrollViewSnap
            data={flagImageList}
            style={styles.flagImageContainer}
            imageStyle={styles.roundImage}
            height={flagHeight}
            currentIndex={currentIndex}
          />
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
  roundImage: {
    height: flagHeight,
    width: flagHeight,
    borderRadius: flagHeight / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  flagImageContainer: {
    height: flagHeight,
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
    width: "100%",
  },
});

export default Home;
