import React, {useEffect} from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = () => {

    const navigation = useNavigation();

    const isAuthenticated = async() => {
        const token = await AsyncStorage.getItem('token');
        return !!token;
    }

    useEffect(() => {
        const checkIfAuthenticated = async() => {
            if(await isAuthenticated()) {
                navigation.navigate('Home')
            } else {
                navigation.navigate('SignInScreen');
            }
        }

        checkIfAuthenticated();

    }, []);



    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" />
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});
