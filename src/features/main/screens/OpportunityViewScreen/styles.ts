import { colors } from "@theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  body: {
    rowGap: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  cardContainer: {
    backgroundColor: colors.paletteV2.white,
    borderRadius: 12,
    padding: 20,
    shadowColor: colors.paletteV2.secondary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    rowGap: 10,
  },
  description: {
    lineHeight: 20,
  },
  infoContainer: {
    rowGap: 16,
  },
  investButton: {
    backgroundColor: colors.paletteV2.primary,
    borderRadius: 12,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  investButtonDisabled: {
    opacity: 0.6,
  },
});
