import { create } from 'zustand';

type State = {
  address: string;
  isConnected: boolean;
};

type Actions = {
  setAddress: (newAddress: string) => void;
  setIsConnected: (isConnected: boolean) => void;
};

export const useUserStore = create<State & Actions>(set => ({
  address: '',
  isConnected: false,
  setAddress: (address: string) => set(() => ({ address })),
  setIsConnected: (isConnected: boolean) => set(() => ({ isConnected })),
}));
