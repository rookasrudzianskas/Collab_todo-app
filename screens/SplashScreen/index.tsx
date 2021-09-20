import React, {useEffect} from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import {useNavigation} from "@react-navigation/native";

const SplashScreen = () => {

    const navigation = useNavigation();

    const isAuthenticated = () => {
        return false;
    }

    useEffect(() => {
        if(isAuthenticated()) {
            navigation.navigate('Home')
        } else {
            navigation.navigate('SignInScreen');
        }
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
