import React from "react";
import { View } from "react-native";

import { Text } from "@components";
import { colors } from "@theme";
import { formatCurrency } from "@utils/format";
import { styles } from "./styles";

export type BalanceSummaryProps = {
  totalBalance: number;
  availableBalance: number;
};

export const BalanceSummary = (props: BalanceSummaryProps) => {
  const { totalBalance, availableBalance } = props;
  return (
    <View style={styles.balanceContainer}>
      <View style={styles.balanceCard}>
        <Text size={14} color={colors.paletteV2.offWhite}>
          Total Balance
        </Text>
        <Text size={33} weight="700" color={colors.paletteV2.white}>
          ${formatCurrency(totalBalance) || 0}
        </Text>
        <View style={styles.availableBalanceRow}>
          <Text size={14} color={colors.paletteV2.offWhite}>
            Available:{" "}
          </Text>
          <Text size={16} weight="600" color={colors.paletteV2.white}>
            ${formatCurrency(availableBalance) || 0}
          </Text>
        </View>
      </View>
    </View>
  );
};
