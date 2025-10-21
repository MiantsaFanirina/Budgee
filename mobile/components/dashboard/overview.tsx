import React from 'react';
import { View, Text } from 'react-native';
import {Feather, Ionicons} from "@expo/vector-icons";
import {useUserStore} from "@/context/userContext";

const Overview = () => {

  const username = useUserStore((state) => state.username);

  return (
    <View className={"h-[25%] relative flex justify-center items-center bg-amber-200 px-12 overflow-visible z-10"}>

      {/* Onboarding */}
      <View className={"flex absolute bottom-[100px] flex-row w-full flex-wrap justify-center gap-1"}>
        <Text  className={"text-4xl font-light"}>Welcome</Text>
        <Text  className={"text-4xl font-extrabold tracking-wide"}>{username}</Text>
      </View>

      <View className={'w-full absolute -bottom-[65px] h-[150px] max-h-[150px] border-[0.5px]  bg-white border-gray-300 rounded-md overflow-hidden flex flex-col'}>

        {/* Income overview */}
        <View className={'h-[50%] w-full border-b-[0.5px] border-gray-300 flex flex-row items-center justify-between gap-2 px-6'}>
          <View className={"flex flex-row items-center gap-6"}>
            <Ionicons name="wallet-outline" color="#ffb900" className={"text-amber-400"} size={20} />

            <View className={"flex flex-col justify-center gap-1"}>
              <Text className={"font-bold"}>Income</Text>
              <Text className={"text-gray-500 text-sm"}>$120 more than June</Text>
            </View>
          </View>

          <View className={"flex flex-row justify-center items-center gap-2"}>
            <Text className={"text-xl font-semibold"}>$192</Text>
            <Ionicons name="chevron-forward" color="#000" size={16} />
          </View>

        </View>

        {/* Expense overview */}
        <View className={'h-[50%] w-full flex flex-row items-center justify-between gap-2 px-6'}>
          <View className={"flex flex-row items-center gap-6"}>
            <Feather name="dollar-sign" color="#ffb900" className={"text-amber-400"} size={20} />

            <View className={"flex flex-col justify-center gap-1"}>
              <Text className={"font-bold"}>Expense</Text>
              <Text className={"text-gray-500 text-sm"}>$215 more than June</Text>
            </View>
          </View>

          <View className={"flex flex-row justify-center items-center gap-2"}>
            <Text className={"text-xl font-semibold"}>$313.31</Text>
            <Ionicons name="chevron-forward" color="#000" size={16} />
          </View>

        </View>
      </View>
    </View>
  );
};

export default Overview;