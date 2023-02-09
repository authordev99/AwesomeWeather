import React, { useEffect, useRef } from "react";
import {FlatList, Text} from 'react-native';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import WeatherMenuItem from "../components/WeatherMenuItem";
import DetailWeatherItem from "../components/DetailWeatherItem";
import Header from "../components/Header";
import CustomText from "../components/CustomTitle";
import CustomImageButton from "../components/CustomImageButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { height } = Dimensions.get('window');
//you need to preview n items.
const previewCount = 1;
//to center items
//the screen will show `previewCount` + 1/4 firstItemWidth + 1/4 lastItemWidth
//so for example if previewCount = 3
//itemWidth will be =>>> itemWidth = screenWidth / (3 + 1/4 + 1/4)
const itemHeight = height/(previewCount + .5);
//to center items you start from 3/4 firstItemWidth
const startScroll = (itemHeight * 3/4);


const Home = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const flatlistRef = useRef();
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


  useEffect(() => {
    if (flatlistRef.current) flatlistRef.current.scrollToOffset({
      offset:startScroll, animated: false
    });
  }, [flatlistRef]);

  const snapToOffsets = data.map((x, i) => {
    return ((i * (itemHeight) * previewCount) + startScroll)
  })

  const renderItem = ({ item, index }) => (
    <DetailWeatherItem item={item} index={index}/>
  );

  const openDrawer = () => {
    navigation.toggleDrawer();
  }




  return (

    <View style={styles.container}>
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
            onPress={() =>{}} />
        }

      />
      <FlatList
        ref={flatlistRef}
        style={styles.container}
        pagingEnabled={true}
        horizontal= {false}
        decelerationRate={0}
        snapToOffsets={snapToOffsets}
        snapToAlignment={"start"}
        data={data}
        renderItem={renderItem}/>

    </View>

  );

}



export default Home;


const styles = StyleSheet.create({
  container: {

  },
  view: {
    flex: 1,
    backgroundColor: 'white',
    height: itemHeight, //20 is margin left and right

    justifyContent : 'center',
    alignItems : 'center',
  },
  text : {
    fontSize : 60,
    fontWeight : 'bold',
    color : '#aaa',
  },
  headerAbsolute: {
    zIndex: 1,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'},


});
