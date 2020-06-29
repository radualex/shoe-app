import "react-native-gesture-handler";
import React from "react";
import { View } from "react-native";
import { MainText } from "../Components/Text/MainText";
import { PaddingHorizontal } from "../App.style";
import { mainStyleConstants } from "../main.style";
import { actuatedNormalize } from "../lib/Utility";
import {
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { withDrawerStatus } from "../Components/HOC/withDrawerStatus";

class CustomDrawer extends React.Component<{
  isDrawerOpen: boolean;
  onDrawerUpdate: Function;
}> {
  componentDidUpdate(prevProps: any) {
    if (this.props.isDrawerOpen !== prevProps.isDrawerOpen) {
      this.props.onDrawerUpdate(!prevProps.isDrawerOpen);
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
        }}
      >
        <DrawerContentScrollView {...this.props} style={{ marginTop: 80 }}>
          <DrawerItemList
            {...this.props}
            itemStyle={{
              backgroundColor: mainStyleConstants.theme.light.white,
              paddingHorizontal: PaddingHorizontal - 8,
              marginHorizontal: 0,
              marginBottom: 30,
            }}
            labelStyle={{
              color: mainStyleConstants.theme.light.dark,
              fontFamily: "Raleway_600SemiBold",
              fontSize: actuatedNormalize(32),
            }}
          />
          <View
            style={{
              marginTop: 80,
              borderRadius: 25,
              backgroundColor: mainStyleConstants.theme.light.main,
              marginHorizontal: PaddingHorizontal,
              paddingHorizontal: 50,
              paddingVertical: 40,
            }}
          >
            <MainText
              style={{
                color: mainStyleConstants.theme.light.white,
              }}
            >
              Summer collection
            </MainText>
          </View>
        </DrawerContentScrollView>
      </View>
    );
  }
}

export default withDrawerStatus(CustomDrawer);
