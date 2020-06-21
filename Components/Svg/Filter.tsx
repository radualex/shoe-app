import React from "react";
import { View } from "react-native";
import Svg, { Rect, Line, Circle } from "react-native-svg";

import { SvgProps } from "./Interfaces/SvgProps";

export class FilterSvg extends React.Component<SvgProps> {
  render() {
    return (
      <View style={this.props.style}>
        <Svg
          width={26}
          height={26}
          viewBox={"0 0 15 9"}
          fill={"none"}
          onPress={() => console.log("filter")}
        >
          <Rect width={26} height={2} fill={"white"}></Rect>
          <Line
            y1={2.25}
            x2={10}
            y2={2.25}
            stroke={"black"}
            strokeWidth={1.3}
          ></Line>
          <Line
            y1={7.25}
            x2={10}
            y2={7.25}
            stroke={"black"}
            strokeWidth={1.3}
          ></Line>
          <Circle
            cx={3.5}
            cy={2}
            r={1.6}
            fill={"white"}
            stroke={"black"}
            strokeWidth={1.2}
          ></Circle>
          <Circle
            cx={6.5}
            cy={7}
            r={1.6}
            fill={"white"}
            stroke={"black"}
            strokeWidth={1.2}
          ></Circle>
        </Svg>
      </View>
    );
  }
}
