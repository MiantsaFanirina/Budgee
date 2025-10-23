import React from 'react';
import {ScrollView, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import Overview from "@/components/dashboard/overview";
import TransactionListOverview from "@/components/dashboard/transactionListOverview";


const Dashboard = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView className=" flex flex-col" style={{backgroundColor: '#fee685'}}>

        <Overview />



        <TransactionListOverview/>

      </SafeAreaView>
    </ScrollView>
  );
};

export default Dashboard;