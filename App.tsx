import React, { Component } from "react";
import { View } from "react-native";

import { AppStyle } from "./App.style";

import { MainText } from "./Components/Text/MainText";
import { SecondaryText } from "./Components/Text/SecondaryText";
import { MainHeading } from "./Components/Text/MainHeading";
import { SecondaryHeading } from "./Components/Text/SecondaryHeading";

import { Home } from "./Pages/Home/Home";

// TODO: router
export default class App extends Component {
  render() {
    return <Home />;
    // return (<View></View>)
  }
}
