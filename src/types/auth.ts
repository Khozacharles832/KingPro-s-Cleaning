import { User } from "@supabase/supabase-js";

export type AUthState = {
  user: User | null;
  isLoading: boolean;

  setUser: (user: User | null) => void;
  setIsLoading: (isLoading: boolean) => void;
};
