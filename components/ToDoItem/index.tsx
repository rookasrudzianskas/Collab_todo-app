import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import Checkbox from "../CheckBox";

const ToDoItem = () => {
    const [value, setValue] = useState(false);

    return (
        <View>
            <View style={tw`flex flex-row items-center justify-center`}>
                {/*  Checkbox */}
                <TouchableOpacity activeOpacity={0.8}>
                    <View style={tw`mt-2`}>
                        <Checkbox  onPress={() => setValue(!value)} isChecked={value} />
                    </View>
                </TouchableOpacity>

                {/*   Text input  */}
                <TextInput multiline style={tw`flex flex-1 text-white text-xl`} />
            </View>
        </View>
    );
};

export default ToDoItem;
