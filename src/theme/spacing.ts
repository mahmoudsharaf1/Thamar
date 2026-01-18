import { isTablet } from '@utils/device';

/**
  Use these spacings for margins/paddings and other whitespace throughout your app.
 */

const mobileSpacing = {
  xxxs: 2,
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
  xxxxl: 86,
  xxxxxl: 102,
  screenHorizontal: 24,
  screenVertical: 24,
  xxxxxxl: 128,
} as const;

const tabletSpacing = {
  xxxs: 2,
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
  xxxxl: 86,
  xxxxxl: 102,
  screenHorizontal: 36,
  screenVertical: 24,
  xxxxxxl: 128,
} as const;

export const spacing = isTablet() ? tabletSpacing : mobileSpacing;

export type Spacing = keyof typeof spacing;
