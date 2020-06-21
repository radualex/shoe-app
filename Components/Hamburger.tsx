import React, { Component } from "react";
import { HamburgerSvg } from "./Svg/Hamburger";
import { Animated, TouchableOpacity } from "react-native";
import { CloseSvg } from "./Svg/Close";

interface HamburgerState {
  active: boolean;
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export class Hamburger extends Component<{}, HamburgerState> {
  readonly state = {
    active: false,
  };

  _handleMenuOnPress = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <Animated.View>
        <AnimatedTouchable onPress={this._handleMenuOnPress}>
          {!this.state.active ? <HamburgerSvg /> : <CloseSvg />}
        </AnimatedTouchable>
      </Animated.View>
    );
  }
}
