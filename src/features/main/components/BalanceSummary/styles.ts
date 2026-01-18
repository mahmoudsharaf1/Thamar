import { colors } from "@theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  balanceContainer: {
    marginBottom: 24,
  },
  balanceCard: {
    backgroundColor: colors.paletteV2.primary,
    borderRadius: 16,
    padding: 24,
    shadowColor: colors.paletteV2.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  availableBalanceRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
