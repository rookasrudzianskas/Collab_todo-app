import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import Checkbox from "../CheckBox";

const ToDoItem = () => {
    const [isChecked, setIsChecked] = useState(false);

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
                <TextInput multiline style={tw`flex flex-1 text-white text-xl`} />
            </View>
        </View>
    );
};

export default ToDoItem;
