import React, { Component } from "react";
import { View } from "react-native";
import { MainHeading } from "../../Components/Text/MainHeading";

import { HomeStyle } from "./Home.style";
import { Dropdown } from "../../Components/Dropdown";

export class Home extends Component {
  render() {
    return (
      <View style={HomeStyle.main}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <MainHeading style={{ marginRight: "auto" }}>Shoes</MainHeading>
          <Dropdown
            options={[
              { label: "Relevancy", value: "rel" },
              { label: "Price low", value: "plow" },
              { label: "Price high", value: "phigh" },
            ]}
          ></Dropdown>
        </View>
      </View>
    );
  }
}
