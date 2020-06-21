import React from "react";
import { View } from "react-native";
import Svg, { Rect, Line } from "react-native-svg";

import { SvgProps } from "./Interfaces/SvgProps";

export class HamburgerSvg extends React.Component<SvgProps> {
  render() {
    return (
      <View style={this.props.style}>
        <Svg width={32} height={12} viewBox={"0 0 22 7"} fill={"none"}>
          <Rect width={32} height={12} fill={"white"}></Rect>
          <Line
            x1={1}
            y1={1}
            x2={21}
            y2={1}
            stroke={"black"}
            strokeWidth={2}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
          ></Line>
          <Line
            x1={1}
            y1={6}
            x2={15}
            y2={6}
            stroke={"black"}
            strokeWidth={2}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
          ></Line>
        </Svg>
      </View>
    );
  }
}
