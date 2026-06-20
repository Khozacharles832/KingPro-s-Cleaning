import { supabase } from "@/lib/supabase";
import { getProfile } from "@/services/profileService";
import { useAuthStore } from "@/store/authStore";

export async function initAuth() {
  useAuthStore.setState({ loading: true });

  const { data, error } = await supabase.auth.getSession();

  console.log("SESSION DEBUG:", data, error);
  const session = data.session;
  console.log("SESSION:", session?.user);

  if (!session?.user) {
    useAuthStore.setState({
      user: null,
      profile: null,
      loading: false,
    });
    return;
  }

  const profile = await getProfile(session.user.id).catch(() => null);

  useAuthStore.setState({
    user: session.user,
    profile,
    loading: false,
  });
}

export function setupAuthListener() {
  const { data } = supabase.auth.onAuthStateChange(async (_event, session) => {
    const user = session?.user ?? null;

    if (!user) {
      useAuthStore.setState({
        user: null,
        profile: null,
        loading: false,
      });
      return;
    }

    const profile = await getProfile(user.id).catch(() => null);

    useAuthStore.setState({
      user,
      profile,
      loading: false,
    });
  });

  return data;
}
