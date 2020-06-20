import { StyleSheet } from "react-native";
import { PaddingHorizontal } from "../../App.style";

export const HomeStyle = StyleSheet.create({
  main: {
    marginTop: 36,
  },
  header: {
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
