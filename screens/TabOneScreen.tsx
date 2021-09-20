import * as React from 'react';
import {FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import tw from "tailwind-react-native-classnames";
import TodoItem from "../components/ToDoItem";
import {useState} from "react";
import ToDoItem from "../components/ToDoItem";

function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

    const [todos, setTodos] = useState([{
            id: '1',
            content: 'Buy Milk',
            isCompleted: true,
        },
        {
            id: '2',
            content: 'Buy Banana',
            isCompleted: false,
        },
        {
            id: '3',
            content: 'Buy Chocolate',
            isCompleted: false,
        }]);


    const createNewItem = (atIndex) => {
        // console.log("new item at", atIndex)

    }

  return (
    <View style={tw`flex p-5`}>
        <View style={tw`flex items-center justify-center`}>
            <Text style={tw`font-bold text-2xl`}>Collab todo</Text>
        </View>

        <View style={tw``}>
            <FlatList showsVerticalScrollIndicator={false} data={todos} renderItem={({ item, index }) => (
                <ToDoItem onSubmit={() => createNewItem(index + 1)} todo={item}/>
            )} />

        </View>
    </View>
  );
}

export default TabOneScreen;
// done
