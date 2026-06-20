import { Link, router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { register } from "@/services/authService";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    if (!email || !password || !phone) {
      Alert.alert("Validation Error", "Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      await register(email.trim(), phone.trim(), password);

      Alert.alert(
        "Success",
        "Account created successfully. You can now sign in.",
      );

      router.replace("/home");
    } catch (error: any) {
      console.log("REGISTER ERROR:", error);

      Alert.alert("Registration Failed", JSON.stringify(error, null, 2));
    } finally {
      setLoading(false);
    }
  }

  return (
    <View className="flex-1 bg-background justify-center px-6">
      <Text className="text-3xl font-bold text-secondary mb-2">
        Create Account
      </Text>
      <Text className="text-text/70 mb-8">Sign up to get started.</Text>
      <TextInput
        className="bg-white border border-gray-200 rounded-xl px-4 py-4 mb-4 text-text"
        placeholder="Email"
        placeholderTextColor="#9CA3AF"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="bg-white border border-gray-200 rounded-xl px-4 py-4 mb-4 text-text"
        placeholder="Phone Number"
        placeholderTextColor="#9CA3AF"
        keyboardType="phone-pad"
        autoCapitalize="none"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        className="bg-white border border-gray-200 rounded-xl px-4 py-4 mb-6 text-text"
        placeholder="Password"
        placeholderTextColor="#9CA3AF"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        className="bg-primary rounded-xl py-4 items-center"
        onPress={handleRegister}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text className="text-white font-semibold text-base">Register</Text>
        )}
      </TouchableOpacity>
      <View className="flex-row justify-center mt-6">
        <Text className="text-text">Already have an account?</Text>

        <Link href="/login" asChild>
          <TouchableOpacity>
            <Text className="text-primary font-semibold ml-1">Login</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
