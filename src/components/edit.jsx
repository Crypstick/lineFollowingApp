import { useState } from "react";
import { View, TextInput, Pressable, Text } from "react-native";

const Edit = ({value, changeState, values, setValues}) => {
  const [editingVar1, setEditingVar1] = useState(value.var1)
  const [editingVar2, setEditingVar2] = useState(value.var2)
  const changeValue = () => {
    let arr = []
    values.forEach((item) => {
      if (item.index == value.index) {
        item.var1 = editingVar1
        item.var2 = editingVar2
      }
      arr.push(item)
    }) 
    setValues(arr)
  }
  return (
    <View className="mb-6">
      <TextInput
        value={editingVar1}
        onChangeText={setEditingVar1} 
        className="py-2 px-4 rounded-full border-2 border-blue-400 mb-4 bg-white"
      />
      <TextInput
        value={editingVar2}
        onChangeText={setEditingVar2} 
        className="py-2 px-4 rounded-full border-2 border-blue-400 bg-white"
      />
      <Pressable
        onPress={() => {changeValue();changeState(value.index)}}
      >
        <Text className="bg-blue-400 text-white text-center py-2 mt-12 text-lg rounded-full">
          Save Edit
        </Text>
      </Pressable>
    </View>
  )
}

export default Edit