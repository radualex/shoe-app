import React, { Component } from "react";
import { Text } from "react-native";
import { AppLoading } from "expo";
import { Raleway_600SemiBold } from "@expo-google-fonts/raleway";
import * as Font from "expo-font";

let customFonts = {
  Raleway_600SemiBold,
};

interface MainTextProps {
  style?: any;
}

export class MainText extends Component<MainTextProps> {
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
        <Text style={[{ fontFamily: "Raleway_600SemiBold" }, this.props.style]}>
          {this.props.children}
        </Text>
      );
    } else {
      return <AppLoading />;
    }
  }
}
