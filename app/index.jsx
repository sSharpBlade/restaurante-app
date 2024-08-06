import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-slate-500">
      <Text className="text-3xl text-black">App</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{ color: "white" }}>
        Iniciar sesión
      </Link>
    </View>
  );
};

export default App;
