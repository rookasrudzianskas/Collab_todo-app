import * as React from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import tw from "tailwind-react-native-classnames";
import Checkbox from "../components/CheckBox";
import {useState} from "react";

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    const [value, setValue] = useState(false);

  return (
    <View style={tw`flex p-5 items-center justify-center`}>
      <Text style={tw`font-bold text-2xl`}>Collab todo</Text>

      <View style={tw`flex flex-row items-center justify-center`}>
      {/*  Checkbox */}
          <TouchableOpacity activeOpacity={0.8}>
              <View style={tw`mt-2`}>
                <Checkbox  onPress={() => setValue(!value)} isChecked={value} />
              </View>
          </TouchableOpacity>

      {/*   Text input  */}
        <TextInput style={tw`flex flex-1 text-white text-xl`} />
      </View>
    </View>
  );
}


