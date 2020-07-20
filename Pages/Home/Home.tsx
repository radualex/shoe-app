import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { MainHeading } from "../../Components/Text/MainHeading";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";

import { HomeStyle } from "./Home.style";
import { Dropdown } from "../../Components/Dropdown";
import { Card } from "../../Components/Card";

interface HomeProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export class Home extends Component<HomeProps> {
  _handleOnPress = () => {
    this.props.navigation.navigate("Details");
  };

  render() {
    return (
      <View style={HomeStyle.main}>
        <ScrollView style={HomeStyle.content}>
          <View style={HomeStyle.header}>
            <MainHeading style={{ marginRight: "auto" }}>Shoes</MainHeading>
            <Dropdown
              options={[
                { label: "Relevancy", value: "rel" },
                { label: "Price low", value: "plow" },
                { label: "Price high", value: "phigh" },
              ]}
            ></Dropdown>
          </View>
          <Card
            image={require("../../assets/nike/air1.png")}
            name={"Nike Air Max 97 Air Force 1"}
            currency={"$"}
            price={"270.00"}
            onPress={this._handleOnPress}
          />
          <Card
            image={require("../../assets/nike/air2.png")}
            name={"Nike Air Max 95"}
            currency={"$"}
            price={"235.00"}
            onPress={this._handleOnPress}
          />
          <Card
            image={require("../../assets/nike/air3.png")}
            name={"Nike Air Max 270 React"}
            currency={"$"}
            price={"285.00"}
            onPress={this._handleOnPress}
          />
          <Card
            image={require("../../assets/nike/air1.png")}
            name={"Nike Air Max 97 Air Force 1"}
            currency={"$"}
            price={"275.00"}
            onPress={this._handleOnPress}
          />
        </ScrollView>
      </View>
    );
  }
}
