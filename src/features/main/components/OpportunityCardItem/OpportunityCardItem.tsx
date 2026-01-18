import React from "react";
import { TouchableOpacity, View } from "react-native";

import { Icon, Text } from "@components";
import { colors } from "@theme";
import { formatCurrency } from "@utils/format";
import { styles } from "./styles";

export type OpportunityCardItemProps = {
  opportunity: {
    name: string;
    category?: string;
    expectedReturn: number;
    duration: number;
    minInvestment: number;
  };
  onPress: () => void;
};

export const OpportunityCardItem = (props: OpportunityCardItemProps) => {
  const { opportunity, onPress } = props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Icon
            name="trending-up"
            size={24}
            color={colors.paletteV2.primary}
            library="Ionicons"
          />
        </View>
        <View style={styles.cardHeaderText}>
          <Text size={18} weight="600">
            {opportunity.name}
          </Text>
          <Text size={14} color={colors.paletteV2.gray}>
            {opportunity.category || "Investment"}
          </Text>
        </View>
      </View>

      <View style={styles.metricRow}>
        <View style={styles.metric}>
          <Text size={13} color={colors.paletteV2.gray}>
            Annual Return
          </Text>
          <Text size={18} weight="700" color={colors.paletteV2.primary}>
            {opportunity.expectedReturn}%
          </Text>
        </View>
        <View style={styles.metric}>
          <Text size={13} color={colors.paletteV2.gray}>
            Duration
          </Text>
          <Text size={18} weight="700" color={colors.paletteV2.primary}>
            {opportunity.duration} months
          </Text>
        </View>
      </View>

      <View style={styles.minInvestmentRow}>
        <Text size={13} color={colors.paletteV2.gray}>
          Minimum Investment
        </Text>
        <Text size={16} weight="600">
          ${formatCurrency(opportunity.minInvestment)}
        </Text>
      </View>

      <View style={styles.cardFooter}>
        <Text size={14} weight="500" color={colors.paletteV2.primary}>
          View Details
        </Text>
        <Icon
          library="Ionicons"
          name="chevron-forward"
          size={16}
          color={colors.paletteV2.primary}
        />
      </View>
    </TouchableOpacity>
  );
};
