import React from 'react';
import { View, Text } from 'react-native';
import "../global.css"
import {Link} from "expo-router";

const Home = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        <Link href={"/(auth)/login"}>
          <Text>Auth</Text>
        </Link>
      </Text>
    </View>
  );
};


export default Home;