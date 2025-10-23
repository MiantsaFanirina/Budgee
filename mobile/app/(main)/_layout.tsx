import React from 'react';
import { View } from 'react-native';
import {Redirect, Tabs} from "expo-router";
import {useUserStore} from "@/context/userContext";

const DashboardLayout = () => {
  const isLoggedIn = useUserStore((state) => state.loggedIn);

  if (!isLoggedIn) {
    return <Redirect href="/(auth)" />;
  }

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false, title: 'Dashboard' }} />
      <Tabs.Screen name="transaction" options={{ headerShown: false, title: 'Transaction' }} />
    </Tabs>
  );
};

export default DashboardLayout;