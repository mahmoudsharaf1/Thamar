import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { ComponentType } from "react";
import {
    StyleProp,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
    ViewProps,
    ViewStyle,
} from "react-native";

export type IconLibrary = "MaterialIcons" | "FontAwesome" | "Ionicons";

export interface BaseIconProps extends TouchableOpacityProps {
  /**
   * The name of the icon
   */
  name: string;

  /**
   * The library of the icon
   */
  library?: IconLibrary;

  /**
   * An optional tint color for the icon
   */
  color?: string;

  /**
   * An optional size for the icon
   */
  size?: number;

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * An optional parameter for testID automation
   */
  testID?: string;
}

/**
 * A component to render a vector icon from @expo/vector-icons.
 * It is wrapped in a <TouchableOpacity /> if `onPress` is provided, otherwise a <View />.
 */
export function Icon(props: BaseIconProps) {
  const {
    name,
    library = "MaterialIcons",
    color = "black",
    size = 24,
    containerStyle,
    testID,
    ...WrapperProps
  } = props;

  const isPressable = !!WrapperProps.onPress;
  const Wrapper = (isPressable ? TouchableOpacity : View) as ComponentType<
    TouchableOpacityProps | ViewProps
  >;

  let IconComponent: ComponentType<any>;
  switch (library) {
    case "FontAwesome":
      IconComponent = FontAwesome;
      break;
    case "Ionicons":
      IconComponent = Ionicons;
      break;
    case "MaterialIcons":
    default:
      IconComponent = MaterialIcons;
  }

  return (
    <Wrapper
      testID={`${testID}-Wrapper`}
      accessibilityRole={isPressable ? "imagebutton" : undefined}
      style={containerStyle}
      {...WrapperProps}
    >
      <IconComponent
        testID={`${testID}-Icon`}
        name={name}
        size={size}
        color={color}
      />
    </Wrapper>
  );
}
