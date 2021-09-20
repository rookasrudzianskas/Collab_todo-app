import * as React from 'react';
import {
    FlatList, Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import tw from "tailwind-react-native-classnames";
import TodoItem from "../components/ToDoItem";
import {useState} from "react";
import ToDoItem from "../components/ToDoItem";
import {gql} from "@apollo/client";

function ToDoScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

    const GET_PROJECT = gql`
        query getTaskList($id:ID!) {
            getTaskList(id:$id) {
                id
                title
                createdAt
                todos {
                    id
                    content
                    isCompleted
                }
            }
        }
    `;

    const CREATE_TODO = gql`
        mutation createToDo($content:String!, $taskListId: ID!) {
            createToDo(content: $content, taskListId: $taskListId) {
                id
                content
                isCompleted

                taskList {
                    id
                    progress
                    todos {
                        id
                        content
                        isCompleted
                    }
                }
            }
        }
    `

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
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
        </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
  );
}

export default ToDoScreen;
// done

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1
    }
});
