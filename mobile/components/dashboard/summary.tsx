import React from 'react';
import {Text, View} from 'react-native';
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";

const Summary = () => {
  return (
    <View className="">
      <View className="pt-4 px-3 flex flex-row items-center justify-start">
        <Text className={"font-semibold text-gray-500"}>OVERVIEW OF THE MONTH</Text>
      </View>

      <View className={"flex flex-col px-3 py-4 gap-4"}>
        <View className="flex flex-row items-center gap-2">
          <View className="grow flex flex-col  bg-green-200 p-3 rounded-md">
            <View className={"flex flex-row items-center relative mb-1"}>
              <MaterialCommunityIcons name="piggy-bank-outline" color="#000" size={13} />
              <Text className={"font-bold left-[20px] absolute"}>Saving</Text>
            </View>
            <Text className="font-bold text-xl text-green-600">$1,200.00</Text>
          </View>

          <View className="grow flex flex-col bg-amber-100 p-3 rounded-md">
            <View className={"flex flex-row items-center relative mb-1"}>
              <MaterialCommunityIcons name="food-apple-outline" color="#000" size={13} />
              <Text className={"font-bold left-[20px] absolute"}>Food</Text>
            </View>
            <Text className="font-bold text-xl text-amber-500">$1,200.00</Text>
          </View>
        </View>


        <View className="flex flex-row items-center gap-2">
          <View className="grow flex flex-col bg-red-100 p-3 rounded-md">
            <View className={"flex flex-row items-center relative mb-1"}>
              <MaterialCommunityIcons name="calendar-check-outline" color="#000" size={12} />
              <Text className={"font-bold left-[20px] absolute"}>Bills</Text>
            </View>
            <Text className="font-bold text-xl text-red-400">$1,200.00</Text>
          </View>

          <View className="grow flex flex-col bg-blue-100 p-3 rounded-md">
            <View className={"flex flex-row items-center relative mb-1"}>
              <Ionicons name="bus" color="#000" size={11} />
              <Text className={"font-bold left-[20px] absolute"}>Transport</Text>
            </View>
            <Text className="font-bold text-xl text-blue-500">$1,200.00</Text>
          </View>
        </View>

      </View>
    </View>
  );
};

export default Summary;