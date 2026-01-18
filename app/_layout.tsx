import { WalletProvider } from "@contexts/WalletContext";
import { Stack } from "expo-router";
import React from "react";

export default function Layout() {
  return (
    <WalletProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </WalletProvider>
  );
}
