import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { AppLoading } from "expo";
import {
  Raleway_600SemiBold,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import DropDownPicker from "react-native-dropdown-picker";
import * as Font from "expo-font";

import { mainStyleConstants } from "../main.style";

interface DropdownProps {
  // TODO: add model
  options: Array<any>;
}

interface DropdownState {
  value: string;
  fontsLoaded: boolean;
}

// TODO: turn this fonts into HOC
let customFonts = {
  Raleway_600SemiBold,
  Raleway_700Bold,
};

export class Dropdown extends Component<DropdownProps, DropdownState> {
  readonly state = {
    value: this.props.options[0].value,
    fontsLoaded: false,
  };

  _onSelect = (ev: any) => {
    this.setState({ value: ev.value });
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  _handleChangedItem = (item: any) => {
    this.setState({
      value: item.value,
    });
  };

  render() {
    if (this.state.fontsLoaded) {
      {
        return typeof this.props.options !== "undefined" ? (
          <DropDownPicker
            items={this.props.options}
            placeholder="Sort by"
            containerStyle={DropdownStyle.container}
            style={DropdownStyle.main}
            dropDownStyle={DropdownStyle.dropdown}
            placeholderStyle={DropdownStyle.placeholder}
            labelStyle={DropdownStyle.label}
            itemStyle={DropdownStyle.item}
            // TODO: Needs top: 3 for web
            arrowStyle={DropdownStyle.arrow}
            onChangeItem={this._handleChangedItem}
          />
        ) : (
          <View></View>
        );
      }
    } else {
      return <AppLoading />;
    }
  }
}

const DropdownStyle = StyleSheet.create({
  main: {
    backgroundColor: mainStyleConstants.theme.light.white,
    borderWidth: 0,
    padding: 0,
  },
  container: { flex: 1, flexDirection: "row" },
  dropdown: {
    backgroundColor: mainStyleConstants.theme.light.white,
    padding: 0,
    right: 10,
    width: 100,
  },
  placeholder: { fontFamily: "Raleway_700Bold" },
  label: { fontFamily: "Raleway_600SemiBold", textAlign: "right" },
  item: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  arrow: { top: 1, marginLeft: 10 },
});
