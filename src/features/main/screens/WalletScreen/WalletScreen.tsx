import {
  BaseLayout,
  EmptyState,
  Icon,
  LoadingIndicator,
  Text,
} from "@components";
import { useWallet } from "@contexts/WalletContext";
import { BalanceSummary, TransactionItem } from "@features/main/components";
import { Transaction } from "@store/types";
import { colors } from "@theme";
import { useRouter } from "expo-router";
import React, { useCallback } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const WalletScreen = () => {
  const router = useRouter();
  const { state } = useWallet();

  const { availableBalance, investedBalance, transactions, loading } = state;

  const renderTransactionItem = useCallback(
    ({ item }: { item: Transaction }) => {
      return <TransactionItem item={item} />;
    },
    [],
  );

  return (
    <BaseLayout>
      <View style={styles.body}>
        <TouchableOpacity onPress={() => router.back()}>
          <Icon
            name="arrow-back"
            library="MaterialIcons"
            size={24}
            color={colors.paletteV2.textPrimary}
          />
        </TouchableOpacity>
        <BalanceSummary
          availableBalance={availableBalance}
          totalBalance={availableBalance + investedBalance}
        />

        <Text size={20} weight="700">
          Transactions
        </Text>

        <FlatList
          data={transactions}
          renderItem={renderTransactionItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatList}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            loading ? (
              <LoadingIndicator />
            ) : (
              <EmptyState
                icon="receipt-long"
                title="No Transactions Yet"
                subtitle="Your transaction history will appear here"
                testID="wallet-empty"
              />
            )
          }
        />
      </View>
    </BaseLayout>
  );
};
