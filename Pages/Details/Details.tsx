import React, { Component } from "react";
import { ScrollView, View, Image } from "react-native";
import { MainHeading } from "../../Components/Text/MainHeading";
import { SecondaryText } from "../../Components/Text/SecondaryText";
import { MainText } from "../../Components/Text/MainText";
import { Slider } from "../../Components/Slider";
import { SizeCard } from "../../Components/SizeCard";
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

let sizes = [
  { size: 44, isAvailable: false },
  { size: 45, isAvailable: true },
  { size: 46, isAvailable: true },
  { size: 47, isAvailable: true },
  { size: 48, isAvailable: true },
  { size: 49, isAvailable: true },
];

export class Details extends Component<DetailsProps> {
  readonly state = {
    active: 0,
  };

  componentDidMount() {
    this._setInitialSize();
  }

  _setInitialSize = () => {
    const firstAvailable = sizes.find((size) => size.isAvailable);

    if (firstAvailable) {
      this.setState({ active: sizes.indexOf(firstAvailable) });
    }
  };

  _handleOnPress = (ev: any) => {
    if (ev.isAvailable) {
      this.setState({ active: ev.index });
    }
  };

  // TODO: should not reset position after click (re-render)
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
        <View style={DetailsStyle.sizeView}>
          <MainHeading style={DetailsStyle.sizeText}>Size</MainHeading>
          <MainText style={DetailsStyle.sizeGuideText}>Size guide</MainText>
        </View>
        <ScrollView
          pagingEnabled
          horizontal
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          style={DetailsStyle.sizeCaroussel}
        >
          {sizes.map((sizeItem, index) => (
            <SizeCard
              index={index}
              size={sizeItem.size}
              isAvailable={sizeItem.isAvailable}
              isActive={this.state.active === index}
              onPress={this._handleOnPress}
              style={index === sizes.length - 1 ? { marginRight: 0 } : {}}
            />
          ))}
        </ScrollView>
      </ScrollView>
    );
  }
}
