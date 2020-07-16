import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollView,
} from "react-native";

import { mainStyleConstants } from "../main.style";

// interface SliderProps {
//   image: ImageSourcePropType;
// }

interface SliderState {
  active: number;
}

const imageSources = [
  { source: require("../assets/nike/air1.png") },
  { source: require("../assets/nike/air2.png") },
  { source: require("../assets/nike/air3.png") },
];

export class Slider extends Component<{}, SliderState> {
  readonly state = {
    active: 0,
  };

  _handleOnSliderChange = (ev: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.ceil(
      ev.nativeEvent.contentOffset.x / ev.nativeEvent.layoutMeasurement.width
    );

    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  };

  render() {
    return (
      <View style={SliderStyle.main}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={this._handleOnSliderChange}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          style={SliderStyle.column}
        >
          {imageSources.map((imageSource, index) => (
            <Image
              key={index}
              source={imageSource.source}
              style={SliderStyle.shoe}
            />
          ))}
        </ScrollView>
        <View style={SliderStyle.pagination}>
          {imageSources.map((imageSource, index) => (
            <View
              key={index}
              style={[
                SliderStyle.bullet,
                index === this.state.active
                  ? SliderStyle.activeBullet
                  : SliderStyle.passiveBullet,
              ]}
            />
          ))}
        </View>
      </View>
    );
  }
}

const SliderStyle = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: mainStyleConstants.theme.light.gray,
    borderRadius: 25,
    paddingRight: 24,
    marginHorizontal: 6,
    marginTop: Platform.OS !== "web" ? 32 : 6,
  },
  column: {
    width: Dimensions.get("window").width,
  },
  shoe: {
    height: 150,
    width: Dimensions.get("window").width,
    resizeMode: "contain",
  },
  pagination: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 30,
    marginTop: 10,
    marginLeft: 24,
  },
  bullet: {
    borderRadius: 100 / 2,
    marginHorizontal: 3.5,
  },
  activeBullet: {
    width: 20,
    height: 5,
    backgroundColor: mainStyleConstants.theme.light.dark,
  },
  passiveBullet: {
    width: 10,
    height: 5,
    backgroundColor: mainStyleConstants.theme.light.darkerGray,
  },
});
