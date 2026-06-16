import { getServices } from "@/services/serviceService";
import { useQuery } from "@tanstack/react-query";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const { data, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  console.log(data);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View className="flex-1 p-5 items-center justify-center bg-red-600">
      {data?.map((service) => (
        <Text key={service.id} className="text-lg mb-3 text-white">
          {service.name}
        </Text>
      ))}
    </View>
  );
}
