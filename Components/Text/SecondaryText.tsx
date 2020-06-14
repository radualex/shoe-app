import React, { Component } from "react";
import { Text } from "react-native";
import { AppLoading } from "expo";
import { Raleway_400Regular } from "@expo-google-fonts/raleway";
import * as Font from "expo-font";

let customFonts = {
  Raleway_400Regular,
};

export class SecondaryText extends Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <Text style={{ fontFamily: "Raleway_400Regular" }}>
          {this.props.children}
        </Text>
      );
    } else {
      return <AppLoading />;
    }
  }
}
