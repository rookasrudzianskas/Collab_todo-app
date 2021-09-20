import React, {useEffect, useRef, useState} from 'react';
import {TextInput, TouchableOpacity, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import Checkbox from "../CheckBox";

interface ToDoItemProps {
    todo: {
        id: string,
        content: string,
        isCompleted: boolean,
    },
    onSubmit: () => void,
}

const ToDoItem = ({todo, onSubmit }: ToDoItemProps) => {
    const [isChecked, setIsChecked] = useState(false);
    const [content, setContent] = useState('');
    const input = useRef(null);


    useEffect(() => {
        if(!todo) {
            return;
        }
        setIsChecked(todo.isCompleted);
        setContent(todo.content);
    }, [todo]);

    useEffect(() => {
        // if we just mounted, we need to have focus on input
        if(input.current) {
            // @ts-ignore
            input?.current?.focus();
        }
    }, [input]);

    // @ts-ignore
    const onKeyPress = ({nativeEvent}) => {
        // console.log(nativeEvent);
        if(nativeEvent.key === 'Backspace' && content === '') {
            // delete item at all
            // @TODO  delete
            console.log("DELETED");
        }
    }



    return (
        <View>
            <View style={tw`flex flex-row items-center my-1`}>
                {/*  Checkbox */}
                <TouchableOpacity activeOpacity={0.8}>
                    <View style={tw`mt-2`}>
                        <Checkbox  onPress={() => setIsChecked(!isChecked)} isChecked={isChecked} />
                    </View>
                </TouchableOpacity>

                {/*   Text input  */}
                <TextInput ref={input} onKeyPress={onKeyPress} onSubmitEditing={onSubmit} blurOnSubmit value={content} onChangeText={setContent} multiline style={tw`flex flex-1 text-white text-xl`} />
            </View>
        </View>
    );
};

export default ToDoItem;
