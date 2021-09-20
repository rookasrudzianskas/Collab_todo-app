import * as React from 'react';
import {FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import tw from "tailwind-react-native-classnames";
import TodoItem from "../components/ToDoItem";
import {useState} from "react";

function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

    const [todos, setTodos] = useState([{
            id: '1',
            content: 'Buy Milk',
            isCompleted: false,
        },
        {
            id: '2',
            content: 'Buy Banana',
            isCompleted: true,
        },
        {
            id: '3',
            content: 'Buy Chocolate',
            isCompleted: false,
        }]);

  return (
    <View style={tw`flex p-5`}>
        <View style={tw`flex items-center justify-center`}>
            <Text style={tw`font-bold text-2xl`}>Collab todo</Text>
        </View>

        <View style={tw``}>
            <FlatList data={todos} renderItem={} />

        </View>
    </View>
  );
}

export default TabOneScreen;
