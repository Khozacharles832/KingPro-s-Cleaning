import { initAuth, setupAuthListener } from "@/lib/auth";
import { queryClient } from "@/lib/queryClient";
import { AuthProvider } from "@/providers/AuthProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { useEffect } from "react";
import "../../global.css";

export default function RootLayout() {
  useEffect(() => {
    initAuth();

    const { data } = setupAuthListener();

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </AuthProvider>
    </QueryClientProvider>
  );
}
