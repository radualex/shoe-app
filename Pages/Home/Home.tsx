import React, { Component } from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";

import { mainStyleConstants } from "../../main.style";
import { HeaderStyle } from "./Home.style";

import { Hamburger } from "../../Components/Hamburger";
import { RightNav } from "../../Components/RightNav";

export class Home extends Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={<Hamburger />}
          rightComponent={<RightNav notifications={3} />}
          backgroundColor={mainStyleConstants.theme.light.white}
          containerStyle={HeaderStyle.container}
        ></Header>
      </View>
    );
  }
}
