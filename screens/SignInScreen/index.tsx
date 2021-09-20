import React, {useState} from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';
import tw from "tailwind-react-native-classnames";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


const SignInScreen = () => {

    const uri = 'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';
    const text = 'Hello, my container is blurring contents underneath!';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        // we will do the logic here
    }

    return (
        <View>
            <View style={tw`mt-32 p-10`}>
                <Input
                    placeholder='Username or Email'
                    value={email}
                    onChangeText={setEmail}
                    leftIcon={
                        <Icon
                            style={{marginRight: 10}}
                            name='user'
                            size={24}
                            color='white'
                        />

                    }
                />

                <Input
                    placeholder='Password'
                    value={password}
                    onChangeText={setPassword}
                    leftIcon={
                        <Icon
                            style={{marginRight: 10}}
                            name='lock'
                            size={24}
                            color='white'
                        />

                    }
                />
            </View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    blurContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 20,
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: '600'
    },
});
