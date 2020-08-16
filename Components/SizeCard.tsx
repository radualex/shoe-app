import React, { Component } from "react";
import { StyleSheet, Animated, StyleProp, ViewStyle } from "react-native";

import { mainStyleConstants } from "../main.style";

import { MainText } from "../Components/Text/MainText";
import { TouchableOpacity } from "react-native-gesture-handler";

import { actuatedNormalize } from "../lib/Utility";

interface SizeCardProps {
  index: number;
  size: number;
  isAvailable: boolean;
  isActive: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: Function;
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export class SizeCard extends Component<SizeCardProps> {
  _handleOnPress = () => {
    if (this.props.onPress) {
      this.props.onPress({
        index: this.props.index,
        isAvailable: this.props.isAvailable,
      });
    }
  };
  render() {
    return (
      <AnimatedTouchable
        activeOpacity={0.6}
        style={[
          SizeCardStyle.main,
          this.props.style,
          !this.props.isAvailable
            ? { backgroundColor: mainStyleConstants.theme.light.lightGray }
            : this.props.isActive
            ? { backgroundColor: mainStyleConstants.theme.light.dark }
            : "",
        ]}
        onPress={this._handleOnPress}
      >
        <MainText
          style={[
            SizeCardStyle.text,
            !this.props.isAvailable
              ? { color: mainStyleConstants.theme.light.lighterDark }
              : this.props.isActive
              ? { color: mainStyleConstants.theme.light.white }
              : "",
          ]}
        >
          {this.props.size}
        </MainText>
      </AnimatedTouchable>
    );
  }
}

const SizeCardStyle = StyleSheet.create({
  main: {
    padding: 24,
    backgroundColor: mainStyleConstants.theme.light.gray,
    borderRadius: 15,
    marginRight: 12,
  },
  text: {
    fontSize: actuatedNormalize(14),
  },
});
