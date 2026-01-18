import { Icon, Text } from "@components";
import { Transaction } from "@store/types";
import { colors } from "@theme";
import { formatCurrency, formatDate } from "@utils/format";
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

export type TransactionItemProps = {
  item: Transaction;
};

export const TransactionItem = ({ item }: TransactionItemProps) => {
  const { type, opportunityName, date, amount } = item;
  const isDeposit = type === "DEPOSIT";

  return (
    <View style={styles.container}>
      <View style={styles.transaction}>
        <View style={styles.transactionIcon}>
          <Icon
            name={isDeposit ? "add" : "trending-up"}
            library="MaterialIcons"
            size={20}
            color={
              isDeposit ? colors.paletteV2.success : colors.paletteV2.primary
            }
          />
        </View>

        <View style={styles.transactionInfo}>
          <Text size={16} weight="600">
            {type}
          </Text>
          <Text size={12} color={colors.paletteV2.gray3}>
            {opportunityName}
          </Text>
          <Text size={12} color={colors.paletteV2.gray3}>
            {formatDate(date)}
          </Text>
        </View>
      </View>

      <Text
        size={16}
        weight="600"
        color={isDeposit ? colors.paletteV2.success : colors.paletteV2.primary}
      >
        {isDeposit ? "+" : "-"}
        {formatCurrency(amount)}
      </Text>
    </View>
  );
};
