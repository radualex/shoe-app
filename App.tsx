import "react-native-gesture-handler";
import React, { Component } from "react";
import { AppLoading } from "expo";
import { Raleway_600SemiBold } from "@expo-google-fonts/raleway";
import * as Font from "expo-font";

import { Header } from "react-native-elements";
import { Home } from "./Pages/Home/Home";
import { Details } from "./Pages/Details/Details";
import { Hamburger } from "./Components/Hamburger";
import { RightNav } from "./Components/RightNav";
import CustomDrawer from "./Components/Drawer";

import { PaddingHorizontal } from "./App.style";
import { mainStyleConstants } from "./main.style";

import { NavigationContainer, DrawerActions } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";

export const navigationRef = React.createRef<any>();
const Drawer = createDrawerNavigator();

let customFonts = {
  Raleway_600SemiBold,
};

interface AppState {
  fontsLoaded: boolean;
  isDrawerOpen: boolean;
  isHeaderDisplayed: boolean;
}

export default class App extends Component<{}, AppState> {
  readonly state = {
    fontsLoaded: false,
    isDrawerOpen: false,
    isHeaderDisplayed: false, // set to true
  };

  static navigationOptions = {
    header: {
      visible: false,
    },
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  _handleMenuClicked = () => {
    navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
  };

  _handleDrawerUpdate = (isDrawerOpen: boolean) => {
    this.setState({ isDrawerOpen });
  };

  render() {
    if (this.state.fontsLoaded) {
      return (
        <NavigationContainer
          ref={navigationRef}
          onStateChange={() => {
            const currentRouteName = navigationRef.current.getCurrentRoute()
              .name;
            if (currentRouteName === "Details") {
              this.setState({ isHeaderDisplayed: false });
            }
          }}
        >
          <Header
            leftComponent={
              <Hamburger
                isDrawerOpen={this.state.isDrawerOpen}
                menuClicked={this._handleMenuClicked}
              />
            }
            rightComponent={<RightNav notifications={3} />}
            backgroundColor={mainStyleConstants.theme.light.white}
            containerStyle={{
              borderBottomWidth: 0,
              paddingHorizontal: PaddingHorizontal,
              display: this.state.isHeaderDisplayed ? "flex" : "none",
            }}
          ></Header>
          <Drawer.Navigator
            initialRouteName="Details"
            drawerStyle={{ width: "100%" }}
            screenOptions={{ swipeEnabled: false }}
            drawerContent={(props) => (
              <CustomDrawer
                {...props}
                onDrawerUpdate={this._handleDrawerUpdate}
                collectionText={"Summer collection"}
              />
            )}
          >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="New in" component={Home} />
            <Drawer.Screen name="Sale" component={Home} />
            <Drawer.Screen name="Profile" component={Home} />
            <Drawer.Screen name="Details" component={Details} />
          </Drawer.Navigator>
        </NavigationContainer>
      );
    } else {
      return <AppLoading />;
    }
  }
}
