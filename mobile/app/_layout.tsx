import { Stack } from 'expo-router';
import 'react-native-reanimated';
import "../global.css";
import { useUserStore } from "@/context/userContext";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function RootLayout() {

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{headerShown: false}}/>
    </SafeAreaProvider>
  );
}
