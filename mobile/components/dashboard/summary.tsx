import React from 'react';
import {Text, View} from 'react-native';
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";

const Summary = () => {
  return (
    <View className="">
      <View className="pt-4 px-3 flex flex-row items-center justify-start">
        <Text className={"font-semibold text-gray-500"}>OVERVIEW OF THE MONTH</Text>
      </View>

      <View className="flex-row flex-wrap px-3 py-4">
        {/* Saving */}
        <View className="w-1/2 p-1">
          <View className="bg-green-100 p-6 rounded-md">
            <View className="flex-row items-center mb-1">
              <MaterialCommunityIcons name="piggy-bank-outline" color="#000" size={13} />
              <Text className="font-bold ml-1">Saving</Text>
            </View>
            <Text className="font-bold text-xl text-green-600">$129.00</Text>
          </View>
        </View>

        {/* Food */}
        <View className="w-1/2 p-1">
          <View className="bg-amber-100 p-6 rounded-md">
            <View className="flex-row items-center mb-1">
              <MaterialCommunityIcons name="food-apple-outline" color="#000" size={13} />
              <Text className="font-bold ml-1">Food</Text>
            </View>
            <Text className="font-bold text-xl text-amber-500">$152.80</Text>
          </View>
        </View>

        {/* Bills */}
        <View className="w-1/2 p-1">
          <View className="bg-purple-100 p-6 rounded-md">
            <View className="flex-row items-center mb-1">
              <MaterialCommunityIcons name="calendar-check-outline" color="#000" size={12} />
              <Text className="font-bold ml-1">Bills</Text>
            </View>
            <Text className="font-bold text-xl text-purple-400">$1,200.00</Text>
          </View>
        </View>

        {/* Transport */}
        <View className="w-1/2 p-1">
          <View className="bg-blue-100 p-6 rounded-md">
            <View className="flex-row items-center mb-1">
              <Ionicons name="bus" color="#000" size={11} />
              <Text className="font-bold ml-1">Transport</Text>
            </View>
            <Text className="font-bold text-xl text-blue-500">$45.00</Text>
          </View>
        </View>

      </View>

    </View>
  );
};

export default Summary;