import { Text } from "@components";
import { colors } from "@theme";
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
export type LabelValueRowItemProps = {
  label: string;
  value: string | number;
  txtColor?: string;
};

export const LabelValueRow = (props: LabelValueRowItemProps) => {
  const { label, value, txtColor } = props;
  return (
    <View style={styles.infoRow}>
      <Text size={14} color={colors.paletteV2.gray}>
        {label}
      </Text>
      <Text size={18} weight="600" color={txtColor}>
        {value}
      </Text>
    </View>
  );
};
