import * as React from 'react';
import {FlatList, KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import tw from "tailwind-react-native-classnames";
import TodoItem from "../components/ToDoItem";
import {useState} from "react";
import ToDoItem from "../components/ToDoItem";

function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

    let id = '4';
    const [title, setTitle] = useState('Untitled magical list');
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


    const createNewItem = (atIndex: number) => {
        // console.log("new item at", atIndex)
        const newTodos = [...todos];
        newTodos.splice(atIndex, 0, {
            id: id,
            content: '',
            isCompleted: false,
        });
        setTodos(newTodos);
    }

  return (
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? 150 : 0} style={{flex: 1}}>
          <View style={styles.container}>
            <View style={tw`flex p-5`}>
                <View style={tw`flex items-center justify-center mb-3`}>
                    <TextInput style={tw`font-bold text-2xl text-white`} defaultValue={title} value={title} onChangeText={setTitle} />
                </View>

                <View style={tw``}>
                    <FlatList showsVerticalScrollIndicator={false} data={todos} renderItem={({ item, index }) => (
                        <ToDoItem onSubmit={() => createNewItem(index + 1)} todo={item}/>
                    )} />

                </View>
            </View>
          </View>
      </KeyboardAvoidingView>
  );
}

export default TabOneScreen;
// done

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
