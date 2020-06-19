import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { mainStyleConstants } from "../main.style";

import SearchIcon from "../assets/search.svg";
import FilterIcon from "../assets/filter.svg";
import { MainText } from "../Components/Text/MainText";

interface RightNavProps {
  notifications: number;
}

export class RightNav extends Component<RightNavProps> {
  render() {
    return (
      <View style={RightNavView.container}>
        <SearchIcon style={searchIconStyle} />
        <FilterIcon style={iconStyle} />
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
  marginRight: iconMaringRightSize + 10,
};
