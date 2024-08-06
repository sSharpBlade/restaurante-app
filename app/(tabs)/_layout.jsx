import { View, Text } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { HomeIcon } from "../../components/Icons";

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{ tabBarShowLabel: false }}>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: () => HomeIcon(),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
