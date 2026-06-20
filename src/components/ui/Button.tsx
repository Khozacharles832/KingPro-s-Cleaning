import { Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  loading?: boolean;
};

export default function Button({ title, onPress, loading }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      className="
        h-14
        bg-red-600
        rounded-2xl
        justify-center
        items-center
      "
    >
      <Text className="text-white font-semibold text-base">
        {loading ? "Please wait..." : title}
      </Text>
    </TouchableOpacity>
  );
}
