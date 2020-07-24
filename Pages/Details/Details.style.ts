import { StyleSheet } from "react-native";
import { mainStyleConstants } from "../../main.style";

import { actuatedNormalize } from "../../lib/Utility";

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
});
