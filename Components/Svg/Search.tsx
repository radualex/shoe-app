import React from "react";
import { View } from "react-native";
import Svg, { Rect, Line, Circle } from "react-native-svg";

import { SvgProps } from "./Interfaces/SvgProps";

export class SearchSvg extends React.Component<SvgProps> {
  render() {
    return (
      <View style={this.props.style}>
        <Svg width={18} height={18} viewBox={"0 0 10 10"} fill={"none"}>
          <Rect width={18} height={18} fill={"white"}></Rect>
          <Line
            x1={6.12192}
            y1={6.8348}
            x2={9.00262}
            y2={9.60997}
            stroke={"black"}
          ></Line>
          <Circle
            cx={4.5}
            cy={4.5}
            r={3.5}
            fill={"white"}
            stroke={"black"}
            strokeWidth={1.2}
          ></Circle>
        </Svg>
      </View>
    );
  }
}
