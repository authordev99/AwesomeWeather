import { Image, ScrollView, View } from "react-native";
import React, { useEffect, useRef } from "react";

const ScrollViewSnap = ({ data, height, style, imageStyle, currentIndex }) => {
  const scrollViewRef = useRef();

  useEffect(() => {
    data && scrollViewRef.current.scrollTo({ x: 0, y: currentIndex * height, animated: true });
  }, [currentIndex]);

  return (
    <View style={style}>
      <ScrollView
        ref={scrollViewRef}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        scrollEventThrottle={16}
        snapToInterval={height}
        snapToAlignment={"center"}
        decelerationRate={0}
      >
        {data.map((item, index) => {
          return <Image key={index} style={imageStyle} source={{ uri: item }} />
        })}
      </ScrollView>
    </View>
  );
};

export default ScrollViewSnap;
