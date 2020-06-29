import React, { Component } from "react";
import { HamburgerSvg } from "./Svg/Hamburger";
import { Animated, TouchableOpacity } from "react-native";
import { CloseSvg } from "./Svg/Close";

interface HamburgerState {
  active: boolean;
}

interface HamburgerProps {
  menuClicked: Function;
  isDrawerOpen: boolean;
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export class Hamburger extends Component<HamburgerProps, HamburgerState> {
  readonly state = {
    active: false,
  };

  // componentDidUpdate(prevProps: any) {
  //   // if(prevProps.isDrawerOpen)
  //   // if(prevProps.isDrawerOpen !== )
  //   console.log("Prop " + prevProps.isDrawerOpen);
  // }

  _handleMenuOnPress = () => {
    // this.setState({ active: this.props.isDrawerOpen });
    // console.log("State " + this.state.active);
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
