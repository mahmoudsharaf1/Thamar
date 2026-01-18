import { Text } from "@components";
import { colors } from "@theme";
import React, { FC } from "react";
import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";

interface LoadingIndicatorProps {
  size?: "small" | "large";
  color?: string;
  text?: string;
  textSize?: number;
}

export const LoadingIndicator: FC<LoadingIndicatorProps> = ({
  size = "large",
  color = colors.paletteV2.primary,
  text,
  textSize = 14,
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      {text && (
        <Text size={textSize} style={styles.text}>
          {text}
        </Text>
      )}
    </View>
  );
};
