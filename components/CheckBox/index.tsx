import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";

interface CheckBoxProps {
    isChecked: boolean,
    onPress: () => void,
}

const Checkbox = (props: CheckBoxProps) => {
    const {onPress, isChecked} = props;

    const name = isChecked ? 'checkbox-marked-outline' : 'checkbox-blank-outline';
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={tw`mr-2`}>
                <MaterialCommunityIcons name={name} size={27} color="white" />
            </View>
        </TouchableOpacity>
    );
};

export default Checkbox;
