import React from "react";
import { View } from "react-native";
import Svg, { G, Path } from "react-native-svg";

import { SvgProps } from "./Interfaces/SvgProps";

export class ArrowSvg extends React.Component<SvgProps> {
  render() {
    return (
      <View style={this.props.style}>
        <Svg x={0} y={0} width={12} height={12} viewBox={"0 0 492 492"}>
          <G>
            <Path
              d={
                "M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
              }
              fillOpacity={1}
              fill={"black"}
              stroke={"none"}
            ></Path>
          </G>
        </Svg>
      </View>
    );
  }
}
