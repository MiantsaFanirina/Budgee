import React from "react";
import { View, Text } from "react-native";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
import {TransactionCategoryType, TransactionType} from "@/type/transactionType";
import {formatDateWithTime} from "@/utils/dateUtils";

// Define an icon map with looser typing for compatibility
const iconMap: Record<
  TransactionCategoryType,
  { lib: React.ComponentType<any>; name: string }
> = {
  spotify: { lib: FontAwesome, name: "spotify" },
  netflix: { lib: Ionicons, name: "logo-netflix" },
  youtube: { lib: Ionicons, name: "logo-youtube" },
  food: { lib: MaterialIcons, name: "fastfood" },
  income: { lib: Ionicons, name: "cash-outline" },
  transport: { lib: Ionicons, name: "car-outline" },
};

const TransactionCard: React.FC<{ transaction: TransactionType }> = ({ transaction }) => {
  const { name, type, amount, date, category } = transaction;

  const iconData = iconMap[category];
  const IconSet = iconData.lib;
  const iconName = iconData.name;

  const formattedDate = formatDateWithTime(date);

  return (
    <View className="flex flex-row items-center justify-between p-6 px-3 border-b border-gray-100">
      <View className="flex flex-row items-center gap-6">
        <IconSet name={iconName} size={18} color="#000" />
        <View>
          <Text className="font-semibold  pb-1">{name}</Text>
          <Text className="text-xs text-gray-500 tracking-tighter">{formattedDate}</Text>
        </View>
      </View>
      <View className={"flex flex-row justify-center items-center gap-2"}>

        <Text
          className={`text-lg font-semibold ${
            type === "Income" ? "text-green-500" : "text-red-500"
          }`}
        >
          {type === "Expense" ? `- $${amount}` : `$${amount}`}
        </Text>
        <Ionicons name="chevron-forward" color="#000" size={16} />
      </View>
    </View>
  );
};

export default TransactionCard;
