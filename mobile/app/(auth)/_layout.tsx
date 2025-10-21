import React from 'react';
import {Redirect, Stack} from "expo-router";
import {useUserStore} from "@/context/userContext";
const AuthLayout = () => {
  const isLoggedIn = useUserStore((state) => state.loggedIn);

  if (isLoggedIn) {
    return <Redirect href="/(main)" />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;