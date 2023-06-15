import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { HeroImage } from "../assets";

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      {/* First Section */}
      <View className="flex-row items-center space-x-2 mt-8 px-6">
        <View className="h-16 w-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>
      {/* Second Section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[38px] font-bold">
          Good Moments
        </Text>
        <Text className="text-[#3C6072] text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id
          luctus magna.{" "}
        </Text>
      </View>
      {/* Circle Section */}
      <View className="w-[350px] h-[350px]  bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[350px] h-[350px]  bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>
      {/* Image Section */}
      <View className="flex-1 items-center justify-center relative">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-20"
        />
        <TouchableOpacity className="absolute bottom-20 h-24 w-24 border-l-2 border-r-2 border-t-4 rounded-full items-center justify-center border-[#00BCC9]">
          <Animatable.View
            animation="pulse"
            easing="ease-in-out"
            iterationCount="infinite"
            className="w-20 h-20  rounded-full items-center justify-center bg-[#00BCC9]"
          >
            <Text className="text-gray-50 font-semibold text-[36px]">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
