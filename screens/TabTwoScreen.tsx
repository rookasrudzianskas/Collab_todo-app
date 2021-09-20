import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import tw from "tailwind-react-native-classnames";
import {AntDesign, Entypo, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

export default function TabTwoScreen() {

  const navigation = useNavigation();

  return (
    <View style={tw`mt-16`}>

      <View style={tw`p-2`}>
        <View style={tw`flex flex-row items-center`}>
          <MaterialCommunityIcons name="chevron-left" size={35} color="yellow" />
          <Text style={tw`flex flex-1 text-xl`}>Rokas Developments</Text>
          <MaterialCommunityIcons name="check-underline" size={29} color="yellow" />
          <MaterialCommunityIcons style={tw`mx-1`} name="filter-menu-outline" size={30} color="yellow" />
          <MaterialCommunityIcons style={tw`mx-1`} name="dots-horizontal" size={30} color="yellow" />
        </View>
        <View style={tw`my-2 ml-2 mt-5 mb-5`}>
          <Text style={tw`text-gray-400`}>RECENT</Text>
        </View>
      </View>
      {/*  tasklist */}
      <View style={tw`flex flex-col`}>
      <View style={tw`flex flex-row items-center p-2`}>
        <View style={tw`bg-gray-700 p-2 rounded-xl`}>
          <MaterialCommunityIcons name="file-outline" size={40} color="gray" />
        </View>
        <View style={tw`flex flex-col`}>
          <View style={tw`flex flex-row`}>
            <Text style={tw`text-2xl font-medium ml-2`}>Title lorem ipsum</Text>
            <Text style={tw`ml-2 text-xl text-gray-500`}>2d</Text>
          </View>

          <View style={tw`flex flex-row ml-3 mt-1 items-center`}>
            <View style={tw`flex flex-row items-center bg-gray-600 px-2 py-1 rounded-full border border-gray-400`}>
              <Entypo name="browser" size={22} color="lightgray" />
              <Text style={tw`ml-2`}>Date</Text>
            </View>

            <View style={tw`flex flex-row items-center mx-3 bg-gray-600 px-2 py-1 rounded-full border border-gray-400`}>
              <Ionicons name="person" size={22} color="lightgray" />
              <Text style={tw`ml-2`}>Assign</Text>
            </View>

            <View style={tw`flex flex-row items-center ml-0 bg-gray-600 px-2 py-1 rounded-full border border-gray-400`}>
              <AntDesign name="tag" size={22} color="lightgray" />
              <Text style={tw`ml-2`}>Tag</Text>
          </View>
          </View>
        </View>



      </View>
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
