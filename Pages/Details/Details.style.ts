import { StyleSheet } from "react-native";
import { mainStyleConstants } from "../../main.style";

import { actuatedNormalize } from "../../lib/Utility";
import { PaddingHorizontal } from "../../App.style";
import { abs } from "react-native-reanimated";

const marginValue = 10;

export const DetailsStyle = StyleSheet.create({
  main: {
    backgroundColor: mainStyleConstants.theme.light.white,
    flex: 1,
    flexDirection: "column",
  },
  infoView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  infoImage: { marginVertical: marginValue },
  infoName: { fontSize: actuatedNormalize(32), marginBottom: marginValue },
  infoPrice: { fontSize: actuatedNormalize(28), marginVertical: marginValue },
  sizeView: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: PaddingHorizontal + 10,
    justifyContent: "space-between",
    marginTop: 32,
    marginBottom: 24,
  },
  sizeText: { fontSize: actuatedNormalize(11) },
  sizeGuideText: { color: mainStyleConstants.theme.light.darkerGray },
  sizeCaroussel: { marginHorizontal: PaddingHorizontal + 10 },
  descriptionView: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: PaddingHorizontal + 10,
    justifyContent: "space-between",
    marginVertical: 38,
  },
  buttonsView: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: PaddingHorizontal + 10,
    justifyContent: "space-between",
    marginBottom: 24,
  },
  favoriteButton: {
    padding: 20,
    borderColor: mainStyleConstants.theme.light.darkerGray,
    borderRadius: 10,
    borderWidth: 1,
    marginRight: 12,
    zIndex: 1,
  },
  favoriteHearthIcon: {
    // position: "absolute",
    width: 18,
    height: 18,
    zIndex: -1,
  },
  addToCardWrapper: {
    backgroundColor: mainStyleConstants.theme.light.dark,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  addToCardText: {
    color: mainStyleConstants.theme.light.white,
  },
});
