import { supabase } from "@/lib/supabase";

let cache: any = null;
let cacheId: string | null = null;

export async function getProfile(userId: string) {
  if (cache && cacheId === userId) return cache;

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) throw error;

  cache = data;
  cacheId = userId;

  return data;
}
