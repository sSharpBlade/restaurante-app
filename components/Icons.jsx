import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const HomeIcon = (props) => (
  <Ionicons name="home" size={24} color="black" {...props} />
);

export const ProfileIcon = (props) => (
  <Ionicons name="person-circle" size={30} color="black" />
);

export const showPasswordIcon = (props) => (
  <FontAwesome
    name="low-vision"
    size={24}
    color="white"
    {...props}
    className="w-6 h-6"
  />
);
