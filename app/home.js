import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {

  return (
    <View>
      <Text>Open up App.js to start working on your aplicación!</Text>
      <Link href="/">Volver</Link>
      <StatusBar style="auto" />
    </View>
  );
}
