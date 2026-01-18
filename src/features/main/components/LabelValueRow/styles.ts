import { colors } from "@theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.paletteV2.offWhite,
  },
});
