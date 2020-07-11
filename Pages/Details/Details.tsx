import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { MainHeading } from "../../Components/Text/MainHeading";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";

interface DetailsProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export class Details extends Component<DetailsProps> {
  render() {
    return <View></View>;
  }
}
