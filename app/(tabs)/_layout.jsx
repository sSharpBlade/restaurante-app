import { View, Text } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { HomeIcon, ProfileIcon } from "../../components/Icons";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: () => HomeIcon(),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: () => ProfileIcon(),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
