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
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          style={SliderStyle.column}
        >
          <Image
            source={require("../assets/nike/air1.png")}
            style={SliderStyle.shoe}
          />
          <Image
            source={require("../assets/nike/air2.png")}
            style={SliderStyle.shoe}
          />
          <Image
            source={require("../assets/nike/air3.png")}
            style={SliderStyle.shoe}
          />
        </ScrollView>
      </View>
    );
  }
}

const SliderStyle = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: mainStyleConstants.theme.light.gray,
    borderRadius: 25,
    paddingHorizontal: 24,
    marginHorizontal: 6,
    marginTop: Platform.OS !== "web" ? 50 : 6,
  },
  column: {
    width: Dimensions.get("window").width,
  },
  shoe: {
    height: 150,
    width: Dimensions.get("window").width - 75,
    resizeMode: "contain",
  },
});
