import { TextInput, TextInputProps } from "react-native";

export default function Input(props: TextInputProps) {
  return (
    <TextInput
      {...props}
      placeholderTextColor="#9CA3AF"
      className="
        h-14
        rounded-2xl
        bg-white
        border
        border-gray-200
        px-4
        text-base
      "
    />
  );
}
