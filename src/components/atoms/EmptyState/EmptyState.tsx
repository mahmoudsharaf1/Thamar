import { Icon, Text } from "@components";
import { colors } from "@theme";
import React, { FC } from "react";
import { View } from "react-native";
import { styles } from "./styles";

interface EmptyStateProps {
  icon?: string;
  iconLibrary?: "MaterialIcons" | "Ionicons" | "FontAwesome";
  iconSize?: number;
  iconColor?: string;
  title: string;
  subtitle?: string;
  testID?: string;
}

export const EmptyState: FC<EmptyStateProps> = ({
  icon = "inbox",
  iconLibrary = "MaterialIcons",
  iconSize = 64,
  iconColor = colors.paletteV2.textPrimary,
  title,
  subtitle,
  testID,
}) => {
  return (
    <View style={styles.container}>
      <Icon
        name={icon}
        library={iconLibrary}
        size={iconSize}
        color={iconColor}
        testID={testID ? `${testID}-icon` : "empty-icon"}
      />
      <Text size={18} weight="600" style={styles.title}>
        {title}
      </Text>
      {subtitle && (
        <Text
          size={14}
          color={colors.paletteV2.textPrimary}
          style={styles.subtitle}
        >
          {subtitle}
        </Text>
      )}
    </View>
  );
};
