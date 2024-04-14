import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const DATA = [
    {
      id: "1",
      page: "FirstRun",
      title: "First Run",
    },
    {
      id: "2",
      page: "SubsequentRun",
      title: "Subsequent Runs",
    },
  ];

  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigation.navigate(item.page)}>
      <View className="flex w-[400px] h-[100px] mt-5 bg-red-300">
        <Text className="font-semibold text-2xl align-center justify-center text-center">
          {item.page}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <View className="flex justify-center align-center align-middle items-center">
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;
