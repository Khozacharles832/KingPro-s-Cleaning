import { useAuthStore } from "@/store/authStore";
import { Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const { user, profile, loading } = useAuthStore();
  console.log("user", user);

  if (loading)
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <ActivityIndicator size="large" />
      </View>
    );

  if (!user) return <Redirect href="/(auth)/login" />;

  if (profile?.role === "admin") {
    return <Redirect href="/(admin)/dashboard" />;
  }

  return <Redirect href="/(tabs)/home" />;
}
