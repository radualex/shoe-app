import { StyleSheet } from "react-native";
import { PaddingHorizontal } from "../../App.style";
import { mainStyleConstants } from "../../main.style";

export const HomeStyle = StyleSheet.create({
  main: {
    backgroundColor: mainStyleConstants.theme.light.white,
    flex: 1,
    flexDirection: "column",
  },
  header: {
    marginTop: 28,
    marginBottom: 24,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: PaddingHorizontal,
    zIndex: 1,
  },
  content: {
    marginTop: 18,
  },
});
