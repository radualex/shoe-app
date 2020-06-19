import React, { Component } from "react";
import { Text } from "react-native";
import { AppLoading } from "expo";
import { Raleway_700Bold } from "@expo-google-fonts/raleway";
import * as Font from "expo-font";
import { actuatedNormalize } from "../../lib/Utility";

let customFonts = {
  Raleway_700Bold,
};

interface MainHeadingProps {
  style?: any;
}

export class MainHeading extends Component<MainHeadingProps> {
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
          style={[
            {
              fontFamily: "Raleway_700Bold",
              fontSize: actuatedNormalize(24),
            },
            this.props.style,
          ]}
        >
          {this.props.children}
        </Text>
      );
    } else {
      return <AppLoading />;
    }
  }
}
