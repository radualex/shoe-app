import React, { Component } from "react";
import { ScrollView } from "react-native";
import { MainHeading } from "../../Components/Text/MainHeading";
import { Slider } from "../../Components/Slider";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";

import { DetailsStyle } from "./Details.style";

interface DetailsProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export class Details extends Component<DetailsProps> {
  render() {
    return (
      <ScrollView style={DetailsStyle.main}>
        <Slider {...this.props} />
      </ScrollView>
    );
  }
}
