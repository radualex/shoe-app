import React, { Component } from "react";
import { ScrollView, View, Image } from "react-native";
import { MainHeading } from "../../Components/Text/MainHeading";
import { SecondaryText } from "../../Components/Text/SecondaryText";
import { Slider } from "../../Components/Slider";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";

import { DetailsStyle } from "./Details.style";

interface DetailsDto {
  shoeLogo: any;
  shoeName: String;
  shoePrice: String;
}

interface DetailsProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  // TODO: use detailsDto for data.
  detailsDto: DetailsDto;
}

export class Details extends Component<DetailsProps> {
  render() {
    return (
      <ScrollView style={DetailsStyle.main}>
        <Slider {...this.props} />
        <View style={DetailsStyle.infoView}>
          <Image
            style={DetailsStyle.infoImage}
            source={require("../../assets/nike.png")}
          />
          <MainHeading style={DetailsStyle.infoName}>
            Nike Air Max 97
          </MainHeading>
          <SecondaryText style={DetailsStyle.infoPrice}>$ 299.00</SecondaryText>
        </View>
      </ScrollView>
    );
  }
}
