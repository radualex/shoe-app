import React, { Component } from "react";
import { Text } from "react-native";
import { AppLoading } from "expo";
import { Raleway_600SemiBold } from "@expo-google-fonts/raleway";
import * as Font from "expo-font";
import { actuatedNormalize } from "../../lib/Utility";

let customFonts = {
  Raleway_600SemiBold,
};

export class SecondaryHeading extends Component {
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
        <Text
          style={{
            fontFamily: "Raleway_600SemiBold",
            fontSize: actuatedNormalize(24),
          }}
        >
          {this.props.children}
        </Text>
      );
    } else {
      return <AppLoading />;
    }
  }
}
