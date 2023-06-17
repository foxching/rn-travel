import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React, { useState, useLayoutEffect, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Item = ({ route }) => {
  const navigation = useNavigation();

  const data = route?.params?.param;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 relative bg-white">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="relative shadow-lg bg-white">
          <Image
            source={{
              uri: data?.photo?.images?.large?.url
                ? data?.photo?.images?.large?.url
                : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",
            }}
            className="w-full h-72 object-cover rounded-2xl"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Item;
