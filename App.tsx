import React, { Component } from "react";
import { View } from "react-native";

import { AppStyle } from "./App.style";

import { MainText } from "./Components/Text/MainText";
import { SecondaryText } from "./Components/Text/SecondaryText";

export default class App extends Component {
  render() {
    return (
      <View style={AppStyle.container}>
        <MainText>Hello World!</MainText>
        <SecondaryText>Hello World!</SecondaryText>
      </View>
    );
  }
}
