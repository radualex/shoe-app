import React, { Component } from "react";
import { Text, View } from "react-native";

import { AppStyle } from "./App.style";

export default class App extends Component {
  render() {
    return (
      <View style={AppStyle.container}>
        <Text>Open up App.tsx to start working on your app! Hello World!</Text>
      </View>
    );
  }
}
