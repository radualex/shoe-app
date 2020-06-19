import React, { Component } from "react";
import { ScrollView } from "react-native";

import { PaddingHorizontal } from "./App.style";
import { Home } from "./Pages/Home/Home";

import { Header } from "react-native-elements";

import { mainStyleConstants } from "./main.style";

import { Hamburger } from "./Components/Hamburger";
import { RightNav } from "./Components/RightNav";

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <Header
          leftComponent={<Hamburger />}
          rightComponent={<RightNav notifications={3} />}
          backgroundColor={mainStyleConstants.theme.light.white}
          containerStyle={{
            borderBottomWidth: 0,
            justifyContent: "space-evenly",
            marginTop: 32,
            paddingHorizontal: PaddingHorizontal,
          }}
        ></Header>
        {/* TODO: Router here */}
        <Home />
      </ScrollView>
    );
  }
}
