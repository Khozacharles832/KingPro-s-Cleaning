import { initAuth, setupAuthListener } from "@/lib/auth";
import { useEffect } from "react";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let mounted = true;

    initAuth();

    const subscription = setupAuthListener();

    return () => {
      mounted = false;
      subscription?.unsubscribe?.();
    };
  }, []);

  return children;
}
