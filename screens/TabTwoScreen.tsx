import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import tw from "tailwind-react-native-classnames";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function TabTwoScreen() {
  return (
    <View style={tw``}>
      {/*  tasklist */}
      <View style={tw``}>
        <View style={tw``}>
          <MaterialCommunityIcons name="file" size={24} color="white" />
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
