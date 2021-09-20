import * as React from 'react';
import {StyleSheet, TextInput} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import tw from "tailwind-react-native-classnames";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {


  return (
    <View style={tw`flex p-5 items-center justify-center`}>
      <Text style={tw`font-bold text-2xl`}>Collab todo</Text>

      <View style={tw`flex flex-row items-center justify-center`}>
      {/*  Checkbox */}
          <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="white" />

      {/*   Text input  */}
        <TextInput style={tw`flex flex-1 text-white text-xl`} />
      </View>
    </View>
  );
}


