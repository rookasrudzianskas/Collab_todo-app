import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const SplashScreen = () => {
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
