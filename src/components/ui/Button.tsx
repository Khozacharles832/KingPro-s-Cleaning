import { Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export default function Button({ title, onPress }: Props) {
  return (
    <TouchableOpacity className="bg-red-600 p-4 rounded-xl" onPress={onPress}>
      <Text className="text-white text-center font-semibold">{title}</Text>
    </TouchableOpacity>
  );
}
