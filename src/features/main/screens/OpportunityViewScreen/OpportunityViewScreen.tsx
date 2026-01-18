import { Opportunity } from "@/features/main/types/data";
import { BaseLayout, Icon, LoadingIndicator, Text } from "@components";
import { useWallet } from "@contexts/WalletContext";
import { LabelValueRow } from "@features/main/components";
import { colors } from "@theme";
import { formatCurrency } from "@utils/format";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const OpportunityViewScreen = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const { state, dispatch } = useWallet();

  const opportunity: Opportunity = params.opportunity
    ? JSON.parse(params.opportunity as string)
    : null;

  const availableBalance = state.availableBalance;

  const handleInvest = async () => {
    const minInv = opportunity.minInvestment || 0;

    try {
      dispatch({
        type: "INVEST",
        payload: {
          amount: minInv,
          opportunity: opportunity,
        },
      });

      Alert.alert(
        "Success",
        `Successfully invested ${formatCurrency(minInv)} SAR in ${opportunity.name}`,
        [{ text: "OK", onPress: () => router.back() }],
      );
    } catch (error) {
      Alert.alert("Error", "Something went wrong");
    }
  };

  return (
    <BaseLayout>
      <View style={styles.body}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Icon
              name="arrow-back"
              library="MaterialIcons"
              size={24}
              color={colors.paletteV2.textPrimary}
            />
          </TouchableOpacity>
          <Text size={20} weight="600" style={styles.title}>
            Opportunity Details
          </Text>
        </View>

        {!opportunity ? (
          <LoadingIndicator />
        ) : (
          <>
            <View style={styles.cardContainer}>
              <Text size={21} weight="600">
                {opportunity.name}
              </Text>

              <Text
                size={14}
                color={colors.paletteV2.gray}
                style={styles.description}
              >
                {opportunity.description}
              </Text>

              <View style={styles.infoContainer}>
                <LabelValueRow
                  label="Expected Return"
                  value={formatCurrency(availableBalance)}
                  txtColor={colors.paletteV2.success}
                />

                <LabelValueRow
                  label="Duration"
                  value={`${opportunity.duration} months`}
                />

                <LabelValueRow
                  label="Min Investment"
                  value={formatCurrency(opportunity.minInvestment)}
                />
                <LabelValueRow
                  label="Available Balance"
                  value={formatCurrency(availableBalance)}
                  txtColor={colors.paletteV2.primary}
                />
              </View>
            </View>

            <TouchableOpacity
              style={[
                styles.investButton,
                availableBalance < opportunity.minInvestment &&
                  styles.investButtonDisabled,
              ]}
              onPress={handleInvest}
              disabled={availableBalance < opportunity.minInvestment}
            >
              <Text size={16} weight="600" color={colors.paletteV2.white}>
                Invest {formatCurrency(opportunity.minInvestment)}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </BaseLayout>
  );
};
