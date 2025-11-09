import {Stack} from 'expo-router';
import 'react-native-reanimated';
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";


export default function RootLayout() {

  return (
    <>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
      </Stack>
    </>
  );
}
