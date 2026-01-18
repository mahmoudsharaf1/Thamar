import {
  BalanceSummary,
  OpportunityCardItem,
} from "@/features/main/components";
import { Opportunity } from "@/features/main/types/data";
import {
  BaseLayout,
  EmptyState,
  Icon,
  LoadingIndicator,
  Text,
} from "@components";
import { useWallet } from "@contexts/WalletContext";
import { useRouter } from "expo-router";
import React, { useCallback } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const HomeDashboardScreen = () => {
  const router = useRouter();
  const { state } = useWallet();

  const { opportunities, availableBalance, investedBalance, loading } = state;

  const renderOpportunityCardItem = useCallback(
    ({ item }: { item: Opportunity }) => (
      <OpportunityCardItem
        opportunity={item}
        onPress={() =>
          router.push({
            pathname: "/opportunity-details",
            params: {
              opportunity: JSON.stringify(item),
            },
          })
        }
      />
    ),
    [router],
  );

  return (
    <BaseLayout>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={opportunities}
        keyExtractor={(item) => item.id}
        renderItem={renderOpportunityCardItem}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <Text size={31} weight="700">
                My Investments
              </Text>
              <TouchableOpacity
                onPress={() => router.push({ pathname: "/wallet" })}
              >
                <Icon
                  library="Ionicons"
                  name="wallet-outline"
                  size={24}
                  color="#1f2937"
                />
              </TouchableOpacity>
            </View>

            <BalanceSummary
              totalBalance={availableBalance + investedBalance}
              availableBalance={availableBalance}
            />

            <Text size={18} weight="600">
              Investment Opportunities
            </Text>
          </View>
        }
        contentContainerStyle={styles.flatList}
        ListEmptyComponent={
          loading ? (
            <LoadingIndicator />
          ) : (
            <EmptyState
              icon="trending-up"
              title="No Opportunities Available"
              subtitle="Check back later for investment opportunities"
              testID="opportunities-empty"
            />
          )
        }
      />
    </BaseLayout>
  );
};
