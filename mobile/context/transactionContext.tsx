import { create } from 'zustand';
import {TransactionType} from "@/type/transactionType";


interface TransactionStore {
  transactions: TransactionType[];
}

export const useTransactionStore = create<TransactionStore>(() => ({
  transactions: [
    {
      id: 1,
      type: 'Expense',
      name: 'Spotify Subscription',
      category: 'spotify',
      amount: 9.99,
      date: '2025-10-21T10:00:00',
      details: 'Spotify Premium monthly payment',
    },
    {
      id: 2,
      type: 'Expense',
      name: 'Lunch at McDonalds',
      category: 'food',
      amount: 12.5,
      date: '2025-10-20T13:30:00',
      details: 'Big Mac combo meal',
    },
    {
      id: 3,
      type: 'Income',
      name: 'Freelance Payment',
      category: 'income',
      amount: 300,
      date: '2025-10-19T18:00:00',
      details: 'Client website project payment',
    },
    {
      id: 4,
      type: 'Expense',
      name: 'Netflix Subscription',
      category: 'netflix',
      amount: 15.99,
      date: '2025-10-18T10:00:00',
      details: 'Netflix Premium plan',
    },
    {
      id: 5,
      type: 'Expense',
      name: 'Groceries',
      category: 'food',
      amount: 45.75,
      date: '2025-10-17T17:30:00',
      details: 'Weekly groceries at supermarket',
    },
    {
      id: 6,
      type: 'Income',
      name: 'Salary',
      category: 'income',
      amount: 2000,
      date: '2025-10-15T09:00:00',
      details: 'Monthly salary from company',
    },
    {
      id: 7,
      type: 'Expense',
      name: 'Uber Ride',
      category: 'transport',
      amount: 8.5,
      date: '2025-10-14T08:45:00',
      details: 'Uber to office',
    },
    {
      id: 8,
      type: 'Expense',
      name: 'Coffee at Starbucks',
      category: 'food',
      amount: 4.5,
      date: '2025-10-13T09:30:00',
      details: 'Latte',
    },
    {
      id: 9,
      type: 'Income',
      name: 'Stock Dividend',
      category: 'income',
      amount: 50,
      date: '2025-10-12T08:00:00',
      details: 'Quarterly dividend payout',
    },
    {
      id: 10,
      type: 'Expense',
      name: 'YouTube Premium',
      category: 'youtube',
      amount: 11.99,
      date: '2025-10-11T10:00:00',
      details: 'Monthly subscription',
    },
  ],
}));
