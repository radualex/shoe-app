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
  Animated,
  Easing,
  TouchableOpacity,
} from "react-native";

import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";

import { mainStyleConstants } from "../main.style";
import { PaddingHorizontal } from "../App.style";

import { BackArrowSvg } from "./Svg/BackArrow";

interface SliderProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface SliderState {
  active: number;
  justInitiated: boolean;
}

const imageSources = [
  { source: require("../assets/nike/air1.png") },
  { source: require("../assets/nike/air2.png") },
  { source: require("../assets/nike/air3.png") },
];

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export class Slider extends Component<SliderProps, SliderState> {
  private activeWidth: Animated.Value;

  readonly state = {
    active: 0,
    justInitiated: true,
  };

  constructor(props: any) {
    super(props);
    this.activeWidth = new Animated.Value(10);
  }

  _handleOnPress = () => {
    this.props.navigation.navigate("Home");
  };

  _handleOnSliderChange = (ev: NativeSyntheticEvent<NativeScrollEvent>) => {
    this.activeWidth.setValue(10);
    if (this.state.justInitiated) {
      this.setState({ justInitiated: false });
    }

    const slide = Math.ceil(
      ev.nativeEvent.contentOffset.x / ev.nativeEvent.layoutMeasurement.width
    );

    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }

    Animated.timing(this.activeWidth, {
      toValue: 20,
      duration: 100,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  render() {
    return (
      <View style={SliderStyle.main}>
        <AnimatedTouchable onPress={this._handleOnPress} style={{ zIndex: 1 }}>
          <BackArrowSvg
            style={{
              position: "absolute",
              top: 20,
              left: PaddingHorizontal,
            }}
          />
        </AnimatedTouchable>

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
            <Animated.View
              key={index}
              style={[
                SliderStyle.bullet,
                index === this.state.active
                  ? [
                      SliderStyle.activeBullet,
                      {
                        width: this.state.justInitiated ? 20 : this.activeWidth,
                      },
                    ]
                  : [SliderStyle.passiveBullet],
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
    marginTop: Platform.OS !== "web" ? 32 : 0,
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
