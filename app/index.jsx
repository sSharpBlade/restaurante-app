import { ScrollView, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

const App = () => {
  return (
    <SafeAreaView className="bg-[#3a4630] h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <CustomButton
            title="Iniciar Sesión"
            handlePress={() => router.push("/sign-in")}
          />
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default App;
