import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { mainStyleConstants } from "../main.style";

import { SearchSvg } from "./Svg/Search";
import { FilterSvg } from "./Svg/Filter";
import { MainText } from "../Components/Text/MainText";

interface RightNavProps {
  notifications: number;
}

export class RightNav extends Component<RightNavProps> {
  render() {
    return (
      <View style={RightNavView.container}>
        <SearchSvg style={searchIconStyle} />
        <FilterSvg style={iconStyle} />
        <View style={RightNavView.notificationView}>
          <MainText style={RightNavView.notifcationText}>
            {this.props.notifications}
          </MainText>
        </View>
      </View>
    );
  }
}

const RightNavView = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: mainStyleConstants.theme.light.white,
    alignItems: "center",
    justifyContent: "center",
  },
  notificationView: {
    width: 32,
    height: 32,
    backgroundColor: mainStyleConstants.theme.light.dark,
    borderRadius: 50,
  },
  notifcationText: {
    color: mainStyleConstants.theme.light.white,
    textAlign: "center",
    lineHeight: 28,
  },
});

const iconMaringRightSize = 24;

const iconStyle = {
  marginRight: iconMaringRightSize,
};

const searchIconStyle = {
  marginRight: iconMaringRightSize + 6,
};
