import * as React from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import tw from "tailwind-react-native-classnames";
import TodoItem from "../components/ToDoItem";
import {useState} from "react";

function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  return (
    <View style={tw`flex p-5`}>
        <View style={tw`flex items-center justify-center`}>
            <Text style={tw`font-bold text-2xl`}>Collab todo</Text>
        </View>

        <View style={tw``}>
            <TodoItem />

        </View>
    </View>
  );
}

export default TabOneScreen;
