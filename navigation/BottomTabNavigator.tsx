import {AntDesign, Ionicons, MaterialIcons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ProjectsScreen from '../screens/ProjectsScreen';
import ToDoScreen from "../screens/ToDoScreen";
// @ts-ignore
import { BottomTabParamList, HomeParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Home">
            <BottomTab.Screen
                name="Home"
                component={ToDoScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color="white" />,
                }}
            />
            <BottomTab.Screen
                name="Coming Soon"
                component={ProjectsScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={24} color="white" />,
                }}
            />

        </BottomTab.Navigator>
    );
}

const HomeStack = createStackNavigator<HomeParamList>();

function TabOneNavigator() {
    return (
        <HomeStack.Navigator>

            <HomeStack.Screen
                name="HomeScreen"
                component={ToDoScreen}
                options={{ headerShown: false }}
            />
        </HomeStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={ProjectsScreen}
                options={{ headerShown: false }}
            />
        </TabTwoStack.Navigator>
    );
}
