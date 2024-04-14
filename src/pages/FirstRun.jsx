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

const FirstRun = () => {
  const [test, setTest] = useState(0);
  const [var2, setVar2] = useState(0);
  const [values, setValues] = useState([]);

  const runEntry = [
    { name: test, set: setTest },
    { name: var2, set: setVar2 },
  ];

  const setCardToField = (index) => {
    let arr = [];
    for (let i = 0; i < values.length; i++) {
      if (index == i) {
        values[i].type = "fields";
      }
      arr.push(values[i]);
    }
    setValues(arr);
  };

  const setCardToCard = (index) => {
    let arr = [];
    for (let i = 0; i < values.length; i++) {
      if (index == i) {
        values[i].type = "card";
      }
      arr.push(values[i]);
    }
    setValues(arr);
  };

  const changeValue = (item_n, new_value, find_index) => {
    console.log(`n:${item_n} val:${new_value} find:${find_index}`);
    arr = [];
    values.forEach((value) => {
      if (value.index == find_index) {
        switch (item_n) {
          case 1:
            value.item1 = new_value;
            break;
          case 2:
            value.item2 = new_value;
            break;
        }
      }
      arr.push(value);
    });
    setValues(arr);
  };

  const Card = ({ item }) => {
    return (
      <Pressable
        className="p-4 rounded-lg shadow-lg"
        onPress={() => setCardToField(item.index)}
      >
        <Text>{item.item1}</Text>
        <Text>{item.item2}</Text>
        <Text>{item.index}</Text>
      </Pressable>
    );
  };

  const Fields = ({ item }) => {
    return (
      <>
        <Text>Textbox {item.index == undefined ? 1 : item.index + 1}</Text>
        <TextInput
          value={item.item1.name != undefined ? item.item1.name : item.item1}
          onChangeText={(text) => {
            console.log(text);
            console.log(item.item1.name != undefined);
            item.item1.name != undefined
              ? item.item1.set(text)
              : changeValue(1, text, item.index);
          }}
          onSubmitEditing={() => setCardToCard(item.index)}
          className="border-solid border-red-400 border-2 rounded-md px-2 py-1"
        />
        <TextInput
          value={item.item2.name != undefined ? item.item2.name : item.item2}
          onChangeText={(text) =>
            item.item2.name != undefined
              ? item.item2.set(text)
              : changeValue(2, text, item.index)
          }
          onSubmitEditing={() => setCardToCard(item.index)}
          className="border-solid border-red-400 border-2 rounded-md px-2 py-1"
        />
      </>
    );
  };

  return (
    <View className="p-8">
      <Text>First Run</Text>
      {values.map((item) => {
        if (item.type == "card") {
          return <Card item={item} />;
        } else {
          return <Fields item={item} />;
        }
      })}
      <Fields
        item={{
          item1: { name: test, set: setTest },
          item2: { name: var2, set: setVar2 },
        }}
      />
      <View className="items-center mt-12">
        <Pressable
          className="bg-blue-600 p-2 items-center rounded-full w-[12vw]"
          onPress={() => {
            let index = values.length;
            setValues([
              ...values,
              { item1: test, item2: var2, type: "card", index: index },
            ]);
            console.log([
              ...values,
              { item1: test, item2: var2, type: "card", index: index },
            ]);
          }}
        >
          <Text className="text-white text-3xl">+</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default FirstRun;
