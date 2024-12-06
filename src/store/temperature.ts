
import { create } from 'zustand';

export interface StoreState {
    temperature: number; // L'état
    increment: () => void; // Une action
    decrement: () => void; // Une autre action
}


export const useStore = create<StoreState>((set) => ({
    temperature: 0,
    increment: () => set((state) => ({ temperature: state.temperature + 1 })),
    decrement: () => set((state) => ({ temperature: state.temperature - 1 })),
}));
