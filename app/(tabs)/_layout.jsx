import { View, Text, Pressable } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { HomeIcon, ProfileIcon } from "../../components/Icons";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#e0e0e0",
          },
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
