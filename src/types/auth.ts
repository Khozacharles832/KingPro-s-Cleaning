import { User } from "@supabase/supabase-js";

export type AUthState = {
  user: User | null;
  isLoading: boolean;

  setUser: (user: User | null) => void;
  setIsLoading: (isLoading: boolean) => void;
};

export type Profile = {
  id: string;
  full_name: string | null;
  phone: string | null;
  role: "customer" | "admin";
};
