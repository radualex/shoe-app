import React from "react";
import { View, GestureResponderEvent } from "react-native";
import Svg, { Rect, G, Path } from "react-native-svg";

import { SvgProps } from "./Interfaces/SvgProps";

interface HearthSvgProps extends SvgProps {
  onPress?: (event: GestureResponderEvent) => void;
}

export class HearthSvg extends React.Component<HearthSvgProps> {
  render() {
    return (
      <View style={this.props.style}>
        <Svg
          width={18}
          height={18}
          viewBox={"0 0 24 24"}
          onPress={this.props.onPress}
        >
          <Rect
            width={"100%"}
            height={"100%"}
            x={0}
            y={0}
            fill={"none"}
            stroke={"none"}
          ></Rect>
          <G fill={"white"} stroke={"black"} strokeOpacity={1} strokeWidth={2}>
            <Path
              d={
                "M17.7 4C14 3 12 7 12 7s-2-4-5.7-3S1.8 9.8 4 12l8 8 8-8c2.2-2.2 1-7.1-2.3-8z"
              }
              stroke={"black"}
              strokeOpacity={1}
              strokeWidth={2}
            ></Path>
          </G>
        </Svg>
      </View>
    );
  }
}
