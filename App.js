import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Tasks from "./src/components/Tasks";

export default function App() {
  return (
    <View>
      <Tasks />
      <StatusBar style="auto" />
    </View>
  );
}
