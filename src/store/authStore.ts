// store/authStore.ts
import { Profile } from "@/types/auth";
import { User } from "@supabase/supabase-js";
import { create } from "zustand";

type AuthStore = {
  user: User | null;
  profile: Profile | null;
  loading: boolean;

  setAuth: (user: User | null) => void;
  setProfile: (profile: Profile | null) => void;
  setLoading: (loading: boolean) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  profile: null,
  loading: true,

  setAuth: (user) => set({ user }),
  setProfile: (profile) => set({ profile }),
  setLoading: (loading) => set({ loading }),
}));
