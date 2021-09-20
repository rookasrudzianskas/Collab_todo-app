import React from 'react';
import {View, Text} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

interface CheckBoxProps {
    isChecked: boolean,
}

const Checkbox = (props: CheckBoxProps) => {

    const name = props.isChecked ? 'checkbox-marked-outline' : 'checkbox-blank-outline';
    return (
        <View>
            <MaterialCommunityIcons name={name} size={24} color="white" />
        </View>
    );
};

export default Checkbox;
