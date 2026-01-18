import { colors } from "@theme";
import React from "react";
import { Text as RNText, StyleProp, TextStyle } from "react-native";

export interface TextProps {
  size?: number;
  color?: string;
  weight?: "300" | "400" | "500" | "600" | "700" | "800";
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  testID?: string;
  lineHeight?: number;
  numberOfLines?: number;
}

export const Text = (props: TextProps) => {
  const {
    size = 16,
    color = colors.paletteV2.textPrimary,
    weight = "400",
    children,
    style,
    testID,
    lineHeight,
    numberOfLines,
  } = props;

  const scaledSize = size;

  const textStyle: StyleProp<TextStyle> = [
    {
      color: color,
      fontSize: scaledSize,
      fontWeight: weight,
      textAlign: "left",
      // fontFamily: 'ReadexPro-Regular', // Example font family
      lineHeight: lineHeight,
    },
    style,
  ];

  return (
    <RNText numberOfLines={numberOfLines} testID={testID} style={textStyle}>
      {children}
    </RNText>
  );
};
