import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`${containerStyles} ${isLoading ? "opacity-50" : ""}`}
      disabled={isLoading}
    >
      <Text className={`${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;