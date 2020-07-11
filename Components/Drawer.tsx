import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet } from "react-native";
import { MainText } from "../Components/Text/MainText";
import { PaddingHorizontal } from "../App.style";
import { mainStyleConstants } from "../main.style";
import { actuatedNormalize } from "../lib/Utility";
import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from "@react-navigation/drawer";
import { withDrawerStatus } from "../Components/HOC/withDrawerStatus";

interface CustomDrawerProps
  extends DrawerContentComponentProps<DrawerContentOptions> {
  isDrawerOpen: boolean;
  onDrawerUpdate: Function;
  collectionText?: String;
}

interface CustomDrawerState {}

class CustomDrawer extends React.Component<CustomDrawerProps> {
  componentDidUpdate(prevProps: any) {
    if (this.props.isDrawerOpen !== prevProps.isDrawerOpen) {
      this.props.onDrawerUpdate(!prevProps.isDrawerOpen);
    }
  }

  _filterMenuItems = () => {
    return this.props.state.routes.filter((item) => item.name !== "Details");
  };

  render() {
    const { state, ...rest } = this.props;
    const newState = { ...state }; //copy from state before applying any filter. do not change original state
    newState.routes = this._filterMenuItems();
    
    return (
      <View style={CustomDrawerStyle.mainView}>
        <DrawerContentScrollView
          {...this.props}
          style={CustomDrawerStyle.contentScrollView}
        >
          <DrawerItemList
            state={newState}
            {...rest}
            itemStyle={CustomDrawerStyle.itemListItem}
            labelStyle={CustomDrawerStyle.itemListLabel}
          />
          {typeof this.props.collectionText === "undefined" ? null : (
            <View style={CustomDrawerStyle.secondaryView}>
              <MainText style={CustomDrawerStyle.secondaryViewMainText}>
                {this.props.collectionText}
              </MainText>
            </View>
          )}
        </DrawerContentScrollView>
      </View>
    );
  }
}

const CustomDrawerStyle = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: "column",
  },
  contentScrollView: {
    marginTop: 80,
  },
  itemListItem: {
    backgroundColor: mainStyleConstants.theme.light.white,
    paddingHorizontal: PaddingHorizontal - 8,
    marginHorizontal: 0,
    marginBottom: 30,
  },
  itemListLabel: {
    color: mainStyleConstants.theme.light.dark,
    fontFamily: "Raleway_600SemiBold",
    fontSize: actuatedNormalize(32),
  },
  secondaryView: {
    marginTop: 80,
    borderRadius: 25,
    backgroundColor: mainStyleConstants.theme.light.main,
    marginHorizontal: PaddingHorizontal,
    paddingHorizontal: 50,
    paddingVertical: 40,
  },
  secondaryViewMainText: {
    color: mainStyleConstants.theme.light.white,
  },
});

export default withDrawerStatus(CustomDrawer);
