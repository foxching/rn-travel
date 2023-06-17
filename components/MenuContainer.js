import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

const MenuContainer = ({ title, imgSrc, type, setType }) => {
  const handlePress = () => {
    setType(title.toLowerCase())
  }

  return (
    <TouchableOpacity className="items-center justify-center space-y-2" onPress={handlePress}>
      <View
        className={`w-24 h-24 shadow-sm rounded-full items-center justify-center ${
          type === title.toLowerCase() ? "bg-gray-300" : ""
        }`}
      >
        <Image source={imgSrc} className="w-full h-full object-contain"></Image>
      </View>
      <Text className="text=[#00BCC9] text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
