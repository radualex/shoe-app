import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ImageSourcePropType,
} from "react-native";

import { mainStyleConstants } from "../main.style";

import { MainText } from "../Components/Text/MainText";
import { SecondaryText } from "../Components/Text/SecondaryText";
import { HearthSvg } from "./Svg/Hearth";

const FavouriteIconSize = 18;

interface CardProps {
  image: ImageSourcePropType;
  name: string;
  currency: string;
  price: string;
}

export class Card extends Component<CardProps> {
  render() {
    return (
      <View>
        <View style={CardStyle.main}>
          <View style={CardStyle.column}>
            <Image source={this.props.image} style={CardStyle.shoe} />
            <MainText style={CardStyle.shoeName}>{this.props.name}</MainText>
            <SecondaryText style={CardStyle.shoePrice}>
              {this.props.currency} {this.props.price}
            </SecondaryText>
          </View>
          <HearthSvg style={FavouriteStyle} />
        </View>
      </View>
    );
  }
}

const CardStyle = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: mainStyleConstants.theme.light.gray,
    borderRadius: 25,
    paddingHorizontal: 24,
    marginHorizontal: 6,
    marginVertical: 4,
  },
  column: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  shoe: {
    height: 150,
    width: Dimensions.get("window").width,
    resizeMode: "contain",
  },
  shoeName: { marginVertical: 5 },
  shoePrice: { marginBottom: 25 },
});

const FavouriteStyle = {
  marginTop: 24,
  width: FavouriteIconSize,
  height: FavouriteIconSize,
};
