import { useEffect } from "react";

import { supabase } from "@/lib/supabase";

import { useAuthStore } from "@/store/authStore";

import { getProfile } from "@/services/profileService";

export function useAuth() {
  const setUser = useAuthStore((s) => s.setUser);

  const setProfile = useAuthStore((s) => s.setProfile);

  const setLoading = useAuthStore((s) => s.setLoading);

  useEffect(() => {
    initialize();
  }, []);

  async function initialize() {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      setLoading(false);
      return;
    }

    setUser(session.user);

    const profile = await getProfile(session.user.id);

    setProfile(profile);

    setLoading(false);
  }
}
