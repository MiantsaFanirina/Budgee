import { create } from "zustand/react";

type UserState = {
  loggedIn: boolean;
  id?: null | number;
  username?: string;
  email?: string;
  sessionToken?: string;

  // sync setters
  setLoggedIn: () => void;
  setLoggedOut: () => void;
  setId: (id: number) => void;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  setSessionToken: (token: string) => void;

  // async setters
  setLoggedInAsync: () => Promise<void>;
  setLoggedOutAsync: () => Promise<void>;
  setIdAsync: (id: number) => Promise<void>;
  setUsernameAsync: (username: string) => Promise<void>;
  setEmailAsync: (email: string) => Promise<void>;
  setSessionTokenAsync: (token: string) => Promise<void>;
};

export const useUserStore = create<UserState>((set) => ({
  // initial state
  loggedIn: true,
  id: 1,
  username: "Miantsa Fanirina",
  email: "miantsa@gmail.com",
  sessionToken: "1234567890abcdef",

  // sync setters
  setLoggedIn: () => set({ loggedIn: true }),
  setLoggedOut: () => set({ loggedIn: false, id: null, username: "", email: "", sessionToken: "" }),
  setId: (id: number) => set({ id }),
  setUsername: (username: string) => set({ username }),
  setEmail: (email: string) => set({ email }),
  setSessionToken: (token: string) => set({ sessionToken: token }),

  // async setters
  setLoggedInAsync: async () => set({ loggedIn: true }),
  setLoggedOutAsync: async () => set({ loggedIn: false, id: null, username: "", email: "", sessionToken: "" }),
  setIdAsync: async (id: number) => set({ id }),
  setUsernameAsync: async (username: string) => set({ username }),
  setEmailAsync: async (email: string) => set({ email }),
  setSessionTokenAsync: async (token: string) => set({ sessionToken: token }),
}));
