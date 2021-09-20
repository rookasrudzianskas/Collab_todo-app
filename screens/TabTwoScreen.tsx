import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import tw from "tailwind-react-native-classnames";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function TabTwoScreen() {
  return (
    <View style={tw`mt-16`}>

      <View style={tw`p-2`}>
        <View style={tw`flex flex-row items-center`}>
          <MaterialCommunityIcons name="chevron-left" size={35} color="yellow" />
          <Text style={tw`flex flex-1 text-xl`}>Rokas Developments</Text>
          <MaterialCommunityIcons style={tw`mx-1`} name="chevron-down" size={30} color="yellow" />
          <MaterialCommunityIcons style={tw`mx-1`} name="filter-menu-outline" size={30} color="yellow" />
          <MaterialCommunityIcons style={tw`mx-1`} name="dots-horizontal" size={30} color="yellow" />
        </View>
        <View style={tw`my-2 ml-2 mt-5 mb-5`}>
          <Text style={tw`text-gray-400`}>RECENT</Text>
        </View>
      </View>
      {/*  tasklist */}
      <View style={tw``}>
        <View style={tw``}>
          <MaterialCommunityIcons name="file" size={24} color="gray" />
        </View>
        <Text style={tw``}>Title</Text>
        <Text style={tw``}>2d</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
