import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import ProjectsScreen from "../screens/ProjectsScreen";
import ToDoScreen from "../screens/ToDoScreen";
import SignInScreen from "../screens/SignInScreen";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator initialRouteName={"SignInScreen"} screenOptions={{ headerShown: false,
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>

            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="Home" component={ProjectsScreen} />
            <Stack.Screen name="ToDoScreen" component={ToDoScreen} />

            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </Stack.Navigator>
    );
}
