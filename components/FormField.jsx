import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { showPasswordIcon } from "./Icons";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`${otherStyles}`}>
      <Text className="text-base text-gray-100">{title}</Text>
      <View className="border-2 border-red-500 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-orange-400 items-center flex-row">
        <TextInput
          className="flex-1 text-white text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#e0e0e0"
          onChange={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPasswordIcon()}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
