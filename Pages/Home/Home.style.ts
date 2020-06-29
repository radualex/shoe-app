import { StyleSheet } from "react-native";
import { PaddingHorizontal } from "../../App.style";

export const HomeStyle = StyleSheet.create({
  main: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
  },
  header: {
    marginTop: 32,
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
