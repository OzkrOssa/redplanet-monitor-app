import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>My App</Text>
      <StatusBar style="auto" />
    </View>
  );
}