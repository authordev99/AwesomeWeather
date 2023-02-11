import React from "react";
import { FlatList } from 'react-native';
import { View, StyleSheet, Dimensions } from 'react-native';
import DetailWeatherItem from "../components/DetailWeatherItem";
import Header from "../components/Header";
import CustomText from "../components/CustomTitle";
import CustomImageButton from "../components/CustomImageButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { data } from "../util/data";

const { height } = Dimensions.get('window');


const Home = ({navigation}) => {
  const insets = useSafeAreaInsets();

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
        pagingEnabled={true}
        horizontal= {false}
        decelerationRate={0}
        snapToInterval={height}
        snapToAlignment={"start"}
        data={data}
        renderItem={renderItem}/>

    </View>

  );

}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    height: height,
    justifyContent : 'center',
    alignItems : 'center',
  },
  headerAbsolute: {
    zIndex: 1,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'},
});

export default Home;
