import React, { Component } from "react";
import { HamburgerSvg } from "./Svg/Hamburger";
import { Animated, TouchableOpacity } from "react-native";
import { CloseSvg } from "./Svg/Close";

interface HamburgerProps {
  menuClicked: Function;
  isDrawerOpen: boolean;
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export class Hamburger extends Component<HamburgerProps> {
  readonly state = {
    active: false,
  };

  _handleMenuOnPress = () => {
    this.props.menuClicked();
  };

  render() {
    return (
      <Animated.View>
        <AnimatedTouchable onPress={this._handleMenuOnPress}>
          {!this.props.isDrawerOpen ? <HamburgerSvg /> : <CloseSvg />}
        </AnimatedTouchable>
      </Animated.View>
    );
  }
}
