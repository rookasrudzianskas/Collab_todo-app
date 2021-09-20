import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import tw from "tailwind-react-native-classnames";
import {AntDesign, Entypo, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import ProjectItem from "../components/ProjectItem";

export default function TabTwoScreen() {

  const navigation = useNavigation();

  return (
      <TouchableOpacity activeOpacity={0.8}>
        <View style={tw`mt-16`}>

          <View style={tw`p-2`}>
            <View style={tw`flex flex-row items-center`}>
              <MaterialCommunityIcons name="chevron-left" size={35} color="yellow" />
              <Text style={tw`flex flex-1 text-xl`}>Rokas Developments</Text>
              <MaterialCommunityIcons name="check-underline" size={29} color="yellow" />
              <MaterialCommunityIcons style={tw`mx-1`} name="filter-menu-outline" size={30} color="yellow" />
              <MaterialCommunityIcons style={tw`mx-1`} name="dots-horizontal" size={30} color="yellow" />
            </View>
            <View style={tw`my-2 ml-2 mt-5 mb-2`}>
              <Text style={tw`text-gray-400`}>RECENT</Text>
            </View>
          </View>
            <View>
              <ProjectItem />
            </View>
        </View>
      </TouchableOpacity>
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
