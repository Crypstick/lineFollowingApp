import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";

import NewSegment from "../components/NewSegment";
import { AntDesign } from "@expo/vector-icons";
import Edit from "../components/edit";

const FirstRun = () => {
  const [var1, setVar1] = useState()
  const [var2, setVar2] = useState()
  const [values, setValues] = useState([])

  const addValue = () => {
    let obj = {var1: var1, var2: var2, index: values.length, type: "card"}
    setValues([...values, obj])
  }

  const changeState = (index) => {
    let arr = []
    values.forEach(value => {
      if (value.index == index) {
        value.type == "card" ? value.type = "edit" : value.type = "card"
      }
      arr.push(value)
    })
    setValues(arr)
  }

  return (
    <View className="p-8 pt-16 bg-neutral-100 h-full">
      <Text className="font-semibold text-3xl mb-4">First Run</Text>
      {values.map((value) => {
        if (value.type == "card") {
          return(
            <View key={value.index} className="mb-4 p-4 rounded-lg text-lg bg-white">
              <Text className="font-semibold text-xl">Value {value.index + 1}</Text>
              <Text>{value.var1}</Text>
              <Text>{value.var2}</Text>
              <Pressable
                onPress={() => {changeState(value.index)}}
              >
                <Text className="text-md font-semibold mt-2 hover:text-blue-400">Edit</Text>
              </Pressable>
            </View>
          )
        } else {
          return (
            <Edit value={value} changeState={changeState} values={values}setValues={setValues} key={value.index}/>
          )
        }
      })}
      <TextInput
        value={var1}
        onChangeText={setVar1} 
        className="py-2 px-4 rounded-full border-2 border-blue-400 mb-4 bg-white"
      />
      <TextInput
        value={var2}
        onChangeText={setVar2} 
        className="py-2 px-4 rounded-full border-2 border-blue-400 bg-white"
      />
      <Pressable
        onPress={addValue}
      >
        <Text className="bg-blue-400 text-white text-center py-2 mt-12 text-lg rounded-full">
          Submit
        </Text>
      </Pressable>
    </View>
  );
};
export default FirstRun;
