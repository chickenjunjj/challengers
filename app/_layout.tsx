import { Text, View } from "react-native";
import React, { Component } from "react";
import { Stack } from "expo-router";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";

export default function RootLayout() {
  return (
    <React.Fragment>
      <ThemeProvider value={DarkTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(protected)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </React.Fragment>
  );
}
