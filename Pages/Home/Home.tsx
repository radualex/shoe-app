import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { MainHeading } from "../../Components/Text/MainHeading";

import { HomeStyle } from "./Home.style";
import { Dropdown } from "../../Components/Dropdown";
import { Card } from "../../Components/Card";

export class Home extends Component {
  render() {
    return (
      <View style={HomeStyle.main}>
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
        <ScrollView style={HomeStyle.content}>
          <Card
            image={require("../../assets/nike/air1.png")}
            name={"Nike Air Max 97 Air Force 1"}
            currency={"$"}
            price={"270.00"}
          />
          <Card
            image={require("../../assets/nike/air2.png")}
            name={"Nike Air Max 95"}
            currency={"$"}
            price={"235.00"}
          />
          <Card
            image={require("../../assets/nike/air3.png")}
            name={"Nike Air Max 270 React"}
            currency={"$"}
            price={"285.00"}
          />
          <Card
            image={require("../../assets/nike/air1.png")}
            name={"Nike Air Max 97 Air Force 1"}
            currency={"$"}
            price={"275.00"}
          />
        </ScrollView>
      </View>
    );
  }
}
