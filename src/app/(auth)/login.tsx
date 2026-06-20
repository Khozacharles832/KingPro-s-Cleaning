import { useState } from "react";

import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import { login } from "@/services/authService";
import { Link } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    try {
      setLoading(true);

      await login(email, password);
    } catch (error: any) {
      Alert.alert("Login Failed", error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="
        flex-1
        bg-[#F8F9FA]
        justify-center
        px-6
      "
    >
      <Text
        className="
          text-4xl
          font-bold
          text-[#1D3557]
        "
      >
        King Pro
      </Text>

      <Text
        className="
          mt-2
          text-gray-500
          text-base
        "
      >
        Cleaning Services
      </Text>

      <View className="mt-12 gap-4">
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button title="Sign In" loading={loading} onPress={handleLogin} />
      </View>
      <View className="flex-row justify-center mt-6">
        <Text className="text-text">Don't have an account yet?</Text>

        <Link href="/register" asChild>
          <TouchableOpacity>
            <Text className="text-primary font-semibold ml-1">Register</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </KeyboardAvoidingView>
  );
}
