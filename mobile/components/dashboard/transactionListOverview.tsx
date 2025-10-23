import React from 'react';
import { View, Text } from 'react-native';
import { useTransactionStore } from "@/context/transactionContext";
import TransactionCard from "@/components/dashboard/transactionCard";
import {Ionicons} from "@expo/vector-icons";
import Summary from "@/components/dashboard/summary";

const TransactionListOverview = () => {
  const transactions = useTransactionStore((state) => state.transactions);

  // Sort transactions by date (most recent first)
  const sortedTransactions = [...transactions].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Optionally, take only the first 4 if you want a limited view
  const recentTransactions = sortedTransactions.slice(0, 4);

  return (
    <View className="bg-gray-100 h-full pt-[75px] pb-6 px-6">
      <View className="w-full h-full bg-white border border-gray-200 rounded-md p-4">

        <Summary/>

        <View className="py-4 px-3 flex flex-row items-center justify-between">
          <Text className={"font-semibold text-gray-500"}>RECENT TRANSACTIONS</Text>
          <View className={"flex flex-row gap-1 items-center"}>
            <Text className={"font-bold tracking-tight"}>See all</Text>
            <Ionicons name="arrow-forward" color="#000" size={16} />
          </View>
        </View>

        <View>
          {recentTransactions.map((t) => (
            <TransactionCard key={t.id} transaction={t} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default TransactionListOverview;