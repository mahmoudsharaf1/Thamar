import * as Device from "expo-device";

export const isTablet = (): boolean => {
  return Device.deviceType === Device.DeviceType.TABLET;
};
